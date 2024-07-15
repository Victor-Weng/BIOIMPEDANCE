import { useContext, useEffect, useState, useRef } from 'react';
import { scaleLinear, extent, axisRight, axisLeft, axisBottom, scaleLog, select } from 'd3';
import { BioContext } from '../BioContext';

const DotPlot = ({ width = 800, height = 400 }) => {
    const svgRef = useRef();
    const [frequency, setFrequency] = useState([1, 1, 1]);
    const [phase, setPhase] = useState([1, 1, 1]);
    const [impedance, setImpedance] = useState([1, 1, 1]);
    const { bio, fetchBio } = useContext(BioContext);

    useEffect(() => {
        if (bio) {
            // Convert fetched data to numbers
            const numericFrequency = bio.frequency ? parseFloat(bio.frequency) : 0;
            const numericPhase = bio.phase.map(value => Math.abs(parseFloat(value)));
            const numericImpedance = bio.impedance.map(parseFloat);

            setPhase(numericPhase);
            setImpedance(numericImpedance);

            if (numericFrequency === 2500000) {
                setFrequency([
                    1000, 1258.749793, 1584.45104, 1994.427419, 2510.4851, 3160.072599,
                    3977.740728, 5006.980317, 6302.535436, 7933.315173, 9986.058829,
                    12569.94948, 15822.4213, 19916.46953, 25069.85189, 31556.67087,
                    39721.95292, 50000, 62937.48963, 79222.55202, 99721.37093, 125524.255,
                    158003.6299, 198887.0364, 250349.0158, 315126.7718, 396665.7586,
                    499302.9414, 628497.474, 791121.0651, 995823.4766, 1253492.595,
                    1577833.544, 1986097.646, 2500000
                ]);
            } else if (numericFrequency === 1000000) {
                setFrequency([1, 1, 1]);
            }
        }
    }, [bio]);

    useEffect(() => {
        if (!bio) return;

        const margin = { top: 20, right: 50, bottom: 50, left: 50 };
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;

        // Clear previous svg content
        select(svgRef.current).selectAll('*').remove();

        // Create the SVG container
        const svg = select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create scales
        const xScale = scaleLog()
            .domain(extent(frequency))
            .range([0, plotWidth]);

        const yScaleLeft = scaleLinear()
            .domain(extent(impedance))
            .range([plotHeight, 0]);

        const yScaleRight = scaleLinear()
            .domain(extent(phase))
            .range([plotHeight, 0]);

        // Create axes
        const xAxis = axisBottom(xScale).ticks(10, "~s");
        const yAxisLeft = axisLeft(yScaleLeft);
        const yAxisRight = axisRight(yScaleRight);

        // Append axes to the SVG
        svg.append('g')
            .attr('transform', `translate(0,${plotHeight})`)
            .call(xAxis)
            .append('text') // X-axis title
            .attr('x', plotWidth / 2)
            .attr('y', margin.bottom / 1.5)
            .attr('fill', '#333')
            .attr('text-anchor', 'middle')
            .text('Frequency / Hz');

        svg.append('g').call(yAxisLeft)
            .append('text') // Left Y-axis title
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left / 1.5)
            .attr('x', -plotHeight / 2)
            .attr('fill', '#333')
            .attr('text-anchor', 'middle')
            .text('Impedance / kΩ');

        svg.append('g')
            .attr('transform', `translate(${plotWidth},0)`)
            .call(yAxisRight)
            .append('text') // Right Y-axis title
            .attr('transform', 'rotate(-90)')
            .attr('y', margin.right / 1.5)
            .attr('x', -plotHeight / 2)
            .attr('fill', '#333')
            .attr('text-anchor', 'middle')
            .text('Phase / °');

        // Append circles for impedance
        svg.selectAll('.dot-impedance')
            .data(impedance)
            .enter().append('circle')
            .attr('class', 'dot-impedance')
            .attr('cx', (d, i) => xScale(frequency[i]))
            .attr('cy', d => yScaleLeft(d))
            .attr('r', 3)
            .style('fill', 'steelblue');

        // Append circles for phase
        svg.selectAll('.dot-phase')
            .data(phase)
            .enter().append('circle')
            .attr('class', 'dot-phase')
            .attr('cx', (d, i) => xScale(frequency[i]))
            .attr('cy', d => yScaleRight(d))
            .attr('r', 3)
            .style('fill', 'red');

    }, [bio, frequency, phase, impedance, width, height]);

    return <svg ref={svgRef}></svg>;
};

export default DotPlot;
