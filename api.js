const ctnPlanets = document.getElementById("ctn-main");
const url= 'https://swapi.py4e.com/api/planets/';

(async () => {
    let nextPage = 'https://swapi.py4e.com/api/planets/';

    let planets = [];

    while (nextPage) {
        const res = await fetch(nextPage);

        const {
            next,
            results
        } = await res.json();
        //console.log(next);
        //console.log(results);
        nextPage = next;

        planets = [...planets, ...results];
    }
    outputPlanets(planets);

})();

function outputPlanets(planets){
    //console.log(planets.length);
    //console.log(planets);
    let outPut = ' ';
    planets.forEach(item => {
    outPut += `
            <div class="col-md-3 my-3">
                <div class="card text-center h-100 ">
                    <div style="mh-100" class="card-body h-100 d-inline-block">
                        <h2 style="color: blue">${item.name}</h2>
                        <h5>Climate: ${item.climate}</h5>
                        <h5>Terrain: ${item.terrain}</h5>
                        <h5>Population: ${item.population}</h5>
                    </div>
                </div>
            </div>
`
});
document.querySelector('#ctn-main').insertAdjacentHTML('beforeend', outPut);}                
