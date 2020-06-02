// var Controller = (function () {
//     document.querySelector('.menu-bar-btn').addEventListener('click', () => {

//         document.querySelector('.bar1').classList.toggle('press');
//         document.querySelector('.bar2').classList.toggle('press');
//         document.querySelector('.bar3').classList.toggle('press');
//         document.querySelector('.menu-bar-btn').classList.toggle('press');
//         document.querySelector('.menu-bar-option').classList.toggle('active');
//         document.querySelector('.menu-bar-list').classList.toggle('active');
//         document.querySelectorAll('.menu-bar-list li').forEach(link => {
//             link.classList.toggle('fade');
//         });

//     });
// })();
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

            // document.querySelector('.card-1 p').innerHTML = parseInt(statedata[0].confirmed);
            // document.querySelector('.card-2 p').innerHTML = parseInt(statedata[0].deaths);
            // document.querySelector('.card-3 p').innerHTML = parseInt(statedata[0].recovered);
            // document.querySelector('.card-head p').innerHTML = ('As per ' + statedata[0].lastupdatedtime + ' update given by Govt of India.');
            // document.querySelector('.card-4 p').innerHTML = parseInt(pastDataUpdate.dailyconfirmed);
            // document.querySelector('.card-5 p').innerHTML = parseInt(statedata[0].active);
            
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

