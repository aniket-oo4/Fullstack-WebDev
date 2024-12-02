$(function(){
 
    //JSON data (array of objects) can be defined locally
    //or might be a response from an AJAX call from web server/service.
    var data = [
        { rank: 1, company: 'Exxon Mobil', revenues: 339938.0, profits: 36130.0 },
        { rank: 2, company: 'Wal-Mart Stores', revenues: 315654.0, profits: 11231.0 },
        { rank: 3, company: 'Royal Dutch Shell', revenues: 306731.0, profits: 25311.0 },
        { rank: 4, company: 'BP', revenues: 267600.0, profits: 22341.0 },
        { rank: 5, company: 'General Motors', revenues: 192604.0, profits: -10567.0 },
        { rank: 6, company: 'Chevron', revenues: 189481.0, profits: 14099.0 },
        { rank: 7, company: 'DaimlerChrysler', revenues: 186106.3, profits: 3536.3 },
        { rank: 8, company: 'Toyota Motor', revenues: 185805.0, profits: 12119.6 },
        { rank: 9, company: 'Ford Motor', revenues: 177210.0, profits: 2024.0 },
        { rank: 10, company: 'ConocoPhillips', revenues: 166683.0, profits: 13529.0 },
        { rank: 11, company: 'General Electric', revenues: 157153.0, profits: 16353.0 },
        { rank: 12, company: 'Total', revenues: 152360.7, profits: 15250.0 },
        { rank: 13, company: 'ING Group', revenues: 138235.3, profits: 8958.9 },
        { rank: 14, company: 'Citigroup', revenues: 131045.0, profits: 24589.0 },
        { rank: 15, company: 'AXA', revenues: 129839.2, profits: 5186.5 },
        { rank: 16, company: 'Allianz', revenues: 121406.0, profits: 5442.4 },
        { rank: 17, company: 'Volkswagen', revenues: 118376.6, profits: 1391.7 },
        { rank: 18, company: 'Fortis', revenues: 112351.4, profits: 4896.3 },
        { rank: 19, company: 'Crédit Agricole', revenues: 110764.6, profits: 7434.3 },
        { rank: 20, company: 'American Intl. Group', revenues: 108905.0, profits: 10477.0 }
    ];
                 
    //array of columns.
    var colModel = [
        {
            title: "Rank", //title of column.
            width: 100, //initial width of column
            dataType: "integer", //data type of column
            dataIndx: "rank" //should match one of the keys in row data.
        },
        {
            title: "Company",
            width: 200,
            dataType: "string",
            dataIndx: "company"
        },
        {
            title: "Revenues ($ millions)",
            width: 150,
            dataType: "float",
            align: "right",
            dataIndx: "revenues"
        },
        {
            title: "Profits ($ millions)",
            width: 150,
            dataType: "float",
            align: "right",
            dataIndx: "profits"
        }
    ];
 
    //main object to be passed to pqGrid constructor.   
    var obj = {
        width: 700, //width of grid
        height: 400, //height of grid
        colModel: colModel,
        dataModel: {data: data}
    };   
     
    // $("#grid_json").pqGrid( obj );$grid.pqGrid( 'option', 'dataModel.data', data);
                                    
    //or
 
    pq.grid("#grid_json", obj );
});