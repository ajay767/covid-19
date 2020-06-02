
var tracker = (function () {

    fetch("https://api.covid19india.org/data.json")
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            var pastData = data.cases_time_series;
            var pastDataUpdate = pastData[pastData.length - 1];
            var statedata = data.statewise;
            console.log(statedata);

            // var increasedCase = statedata[0].confirmed - pastDataUpdate.totalconfirmed;
            // document.querySelector('.card-1 span').innerHTML = ('+' + increasedCase);

            // var increasedDeath = statedata[0].deaths - pastDataUpdate.totaldeceased;
            // document.querySelector('.card-2 span').innerHTML = ('+' + increasedDeath);

            // var increasedRecovery = statedata[0].recovered - pastDataUpdate.totalrecovered;
            // document.querySelector('.card-3 span').innerHTML = (`+ ${increasedRecovery}`);

            document.querySelector('.total-count').innerHTML = parseInt(statedata[0].confirmed);
            document.querySelector('.death-count').innerHTML = parseInt(statedata[0].deaths);
        
            // document.querySelector('.card-3 p').innerHTML = parseInt(statedata[0].recovered);
            document.querySelector('.date-note p').innerHTML = ('As per ' + statedata[0].lastupdatedtime + ' update given by Govt of India.');
            // document.querySelector('.card-4 p').innerHTML = parseInt(pastDataUpdate.dailyconfirmed);
            document.querySelector('.active-count').innerHTML = parseInt(statedata[0].active);
            
            for (var i = 1; i < statedata.length; i++) {
                var current = statedata[i];
                var newHtml;
                console.log( current.state);
                console.log(current.statecode);


      var Html = `<tr><td>%State%</td><td>%Active%</td><td>%Death%</td> <td>%Recovered%</td></tr>`;
           
                // newHtml = html.replace('%SC%',current.statecode);
                newHtml = Html.replace('%State%', current.state);
                newHtml = newHtml.replace('%Active%', current.confirmed);
                newHtml = newHtml.replace('%Death%', current.deaths);
                newHtml = newHtml.replace('%Recovered%', current.recovered);
                document.querySelector('.data-table tbody').insertAdjacentHTML('beforeend', newHtml);

            }
        });
})();

