



// var demoData =[];

let apiurl="http://localhost:50017/api/WeatherReport";
 data=fetch(apiurl);
 data.then((response) => {
  // console.log(response.status);
  // console.log(response.ok);
  return response.json();
}).then((value) => {
  const hourlyData= value.map(ele=>ele)
  // console.log(hourlyData.hour);
  console.log(hourlyData ,"type:",typeof hourlyData);

  const svg = d3.select('svg'); //selected svd tag
  const svgContainer = d3.select('#container');  //selected element with contaner id

  const margin = 100;
  const width = 700 - 2 * margin;
  const height = 500 - 2 * margin;

  const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

  // this is for x axis partitions
  const xScale = d3.scaleBand()
    .range([0, width])
    // .domain(sample.map((s) => s.language))
    .domain(hourlyData.map((d) => d.hour))
    .padding(0.4)

  // this is for y axis partitions
  const yScale = d3.scaleLinear()
    .range([height, 0])
    // .domain([0, 100]);
    .domain([0, 30]);// it specifies y axis partition height [0-30 ] 0-5-10-20

  const makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));



  //_____________________________________
  chart.append('g')
    .call(d3.axisLeft(yScale));



  chart.append('g')
    .attr('class', 'grid')  //lines 
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('°') // tick stye for y axis partitions
    )

  const barGroups = chart.selectAll()
    // .data(sample)
    .data(hourlyData)
    .enter()
    .append('g')

  barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.hour))   // specifies bar
    .attr('y', (g) => yScale(g.temp))
    .attr('height', (g) => height - yScale(g.temp))
    .attr('width', xScale.bandwidth()-3)
    .on('mouseenter', function (actual, i) {  //mouseenter event
      // d3.selectAll('.temp')
      //   .attr('opacity', 0) // opacitiy of temp text


      // all  onhover bar  transition related code is below
      d3.select(this)
        // .transition()
        // .duration(200)   // speed of transition
        .attr('opacity', 0.9) // opacity of bar       
        .attr('x', (a) => xScale(a.hour) - 1) // x axis of bar start location
        .attr('width', xScale.bandwidth() + 2) // width or bar increased by after hover

      // const y = yScale(actual.temp)
      const y = yScale(actual.temp)// this is for red dasshed line
      line = chart.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y)

        const line2 = d3.line()
        .x(a => xScale(a.hour) + xScale.bandwidth() / 2)
        .y(a => yScale(a.temp))
        .curve(d3.curveBasis);
  
    chart.append("path")
        .datum(hourlyData)
        .attr("class", "line2")
        .attr("d", line2);



    })  // mouse enter event close

    .on('mouseleave', function () {  //mouse leave event start
      d3.selectAll('.temp')// selector for .temp class
        .attr('opacity', 1)

      d3.select(this)
        .transition()
        .duration(300)// out transition duration
        .attr('opacity', 1)
        // .attr('x', (a) => xScale(a.language))
        .attr('x', (a) => xScale(a.hour))
        .attr('width', xScale.bandwidth())

      chart.selectAll('#limit').remove() //removed tag {limit line } fromhtml
      // chart.selectAll('.rain').remove() // removed tag  {rain text}from html
    })  // mouseleave end

  //below code is for 18% bars percentage diplsay without hover
  barGroups
    .append('text')
    .attr('class', 'temp')
    // .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
    // .attr('y', (a) => yScale(a.temp) + 30)
    .attr('x', (a) => xScale(a.hour) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.temp) + 30) //0 means top
    .attr('text-anchor', 'middle')
    .text((a) => `${a.temp}%`)


  // left side y axis  heading
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    // .text('temperature (%)')
    .text('temperature (C°)')

  //  down side x Axis heading
  svg.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.6) // adjust here y axis
    .attr('text-anchor', 'middle')
    // .text('Most Loved programming laguage  ')
    .text('Clouds ')


  //heading of graph
  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    // .text('HourlyForecast')
    .text('HourlyForecast')


  //source
  svg.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)  // specifying  coordinate x
    .attr('y', height + margin * 1.7

    )  // specifying co-ordinate y
    .attr('text-anchor', 'start')
    .text('Source: Aniket____, 2024')


  // l------------------------ my js ---------------------------------------------

  // line = chart.append('text')
  // .attr('id', 'limit')
  // .attr('x1', 0)
  // .attr('y1', 1)
  // .attr('x2', width)
  // .attr('y2', 1)
  // .text("hello")
  //--------------

  // added x2Axis hours
  barGroups
    .append('text')
    .attr('class', 'hours')
    // .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
    // .attr('y', (a) => yScale(a.temp) + 30)
    .attr('x', (a) => xScale(a.hour) + xScale.bandwidth() / 2)
    .attr('y', (a) => -15)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.hour}`)

  //-------------
  // added clouds
  barGroups
    .append('text')
    .attr('class', 'clouds')
    // .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
    // .attr('y', (a) => yScale(a.temp) + 30)
    .attr('x', (a) => xScale(a.hour) + xScale.bandwidth() / 2)
    .attr('y', (a) => 320)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.clouds}`)
  //-------------
  // added wind
  barGroups
    .append('text')
    .attr('class', 'wind')
    .attr('x', (a) => xScale(a.hour) + xScale.bandwidth() / 2)
    .attr('y', (a) => 334)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.wind}m/s`)
   


  //------------------
  // getting parent of x and y axis ticks g
  let demog = document.querySelector('g').firstElementChild; // selected x axis g
console.log(demog);
  demog.setAttribute("class", "xAxishours");// class is assigned

  //-------------------

  //added rain text 3mm/h
  barGroups.append('text') // bargroup is a data representation
    .attr('class', 'rain')
    .attr('x', (a) => xScale(a.hour) + xScale.bandwidth() / 2)  // x coordinate for text
    .attr('y', (a) => yScale(a.temp) + (-5)) // y cordinate for text
    .attr('fill', 'white') // attr adds the attribute in tag it add fill :white
    .attr('text-anchor', 'middle')
    .text((a) => {  // its for inner bar top text

      let text = ''
      text = `${a.rain} mm/h`;
      return text;
    })


});


/*  ____________________*/


/*  Script for * days display */

const eightDayData = [
	{ date: 'Thu, Sep 05', highTemp: 22, lowTemp: 14, condition: 'moderate rain' },
	{ date: 'Fri, Sep 06', highTemp: 20, lowTemp: 17, condition: 'light rain' },
	{ date: 'Sat, Sep 07', highTemp: 22, lowTemp: 16, condition: 'light rain' },
	{ date: 'Sun, Sep 08', highTemp: 22, lowTemp: 15, condition: 'light rain' },
	{ date: 'Mon, Sep 09', highTemp: 23, lowTemp: 15, condition: 'light rain' },
	{ date: 'Tue, Sep 10', highTemp: 21, lowTemp: 15, condition: 'light rain' },
	{ date: 'Wed, Sep 11', highTemp: 21, lowTemp: 15, condition: 'light rain' },
	{ date: 'Thu, Sep 12', highTemp: 19, lowTemp: 11, condition: 'moderate rain' }
];




let WeatherSymbol=``
let tablebody=document.querySelector("#tbody");

 eightDayData.forEach((element)=>{
//  tablebody.append(

//     ` <tr>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>`
//  )
tablebody.innerHTML+=
` <tr>
        <td> ${element.date}</td>
        <td> ${element.highTemp} /${element.lowTemp}°</td>
        <td> ${element.condition}</td>
      </tr>`
});
