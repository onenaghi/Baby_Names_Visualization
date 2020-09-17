function buildGraph(sample) {
    const url = "/index";
    d3.json(url).then((data) => {
            console.log(data);
            const names = data.map(name.slice(0, 10)); entry.nameTop;
        });
        
      console.log(names)

      const maxwind = data.map(number => entry.number);
      console.log(names);  
   
      const title = `Top Names`;
      const trace = {
        x: namesTop,
        y: number,
        type: 'bar',
        orientation: 'h',
        title: title,
        text: maxwind,
      };
      var data = [trace];
      var layout = {
        title: {
          text: title,
          font: {
            size: 12
          },
        }, 
        font: {
          size: 8,
        },
        xaxis: { title: "Names" },

        yaxis: {title: "Number of Births",
        width: 400,
        margin: {
          l: 100,
          r: 10,
          b: 100,
          t: 100,
          pad: 10}
      };

      Plotly.newPlot("plot", data, layout);



















































function nameChart(id) {
    //Read names.json
        d3.csv("ALL_STATES.csv").then (graphData =>{
            console.log(graphData)

            const number = graphData.name[0].otu_number;
            console.log(number)

            const nameValues =  graphData.names[0].name_values.slice(0,10).reverse();
            console.log(nameValues)

            const otuLabels =  graphData.names[0].otu_labels.slice(0,10);
            console.log (otuLabels)
            
        // get only top 10  names for the plot OTU . 
            const namesTop = ( graphData.names[0].otu_ids.slice(0, 10)).reverse();

        // get the otu id's to the desired form for the plot
            const otuID = namesTop.map(id => id + ":names");
            console.log(`OTU IDS: ${otuID }`)

         // get the top 10 labels for the plot

            var labels =  graphData.names[0].otu_labels.slice(0,10);
            console.log(`OTU_labels: ${labels}`)
            const trace = {
                x: nameValues,
                y: otuID ,
                text: labels,
                marker: {
                color: 'blue'},
                type:"bar",
                orientation: "h",
            };
            // create data variable
            var data = [trace];
    
            // create layout variable to set plots layout
            var layout = {
                title: "Top 10 names - Selected Subject",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 100,
                    r: 100,
                    t: 100,
                    b: 30
                }
            };
    
            // create the bar plot
        Plotly.newPlot("bar1", data, layout);


            
            const trace2 = {
                x: nameValues,
                y: otuID ,
                text: labels,
                marker: {
                color: 'blue'},
                type:"bar",
                orientation: "h",
            };
            // create data variable
            var data2 = [trace2];
    
            // create layout variable to set plots layout
            var layout2 = {
                title: "Top 10 names - All Subjects",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 100,
                    r: 100,
                    t: 100,
                    b: 30
                }
            };
            // create the bar plot
        Plotly.newPlot("bar2", data2, layout2);




            const trace1 = {
                x: graphData.names[0].name_values,
                y: graphData.names[0].otu_labels,
                mode: "markers",
                marker: {
                    size: graphData.names[0].name_values,
                    color: graphData.names[0].otu_ids
                },
                text:  graphData.names[0].otu_labels
    
            };
    
            // set the layout for the bubble plot
            var layout1 = {
                xaxis:{title: "Count of names by Family - Selected Subject"},
                height: 600,
                width: 1000
            };
    
            // creating data variable 
            var data1 = [trace1];
    
        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout1); 
        
        });
    }  
    // create the function to get the necessary data
    function getDemoInfo(id) {
    // read the json file to get data
        d3.json("names.json").then((data)=> {
    // get the metadata info for the demographic panel
            const metadata = data.metadata;
    
            console.log(metadata)
    
          // filter metadata info by id
           const result = metadata.filter(meta => meta.id.toString() === id)[0];
          // select demographic panel to put data
           const demographicInfo = d3.select("#name-metadata");
            
         // empty the demographic info panel each time before getting new id info
           demographicInfo.html("");
    
         // grab the necessary demographic data data for the id and append the info to the panel
            Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
            });
        });
    }
    // create the function for the change event
    function optionChanged(id) {
        namePlots(id);
        getDemoInfo(id);
    }
    
    // create the function for the initial data rendering
    function init() {
        // select dropdown menu 
        const dropdown = d3.select("#selDataset");
    
        // read the data 
        d3.json("names.json").then((data)=> {
            console.log(data)
    
            // get the id data to the dropdwown menu
            data.names.forEach(function(name) {
                dropdown.append("option").text(name).property("value");
            });
    
            // call the functions to display the data and the plots to the page
            namePlots(data.names[0]);
            getDemoInfo(data.names[0]);
        });
    }
    // Initialize the dashboard
    init();


  