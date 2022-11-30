function Filter(props){
    const {filterLocations, original, filterFood, lowtohigh, hightolow, by_id} = props
  
    const checkthroughId = (id, loc) => {
        onClickFunc('hidden', id)
        filterLocations(loc);
        return filterLocations(loc)
    }

    function onClickFunc(oid, id){
        const targetDiv = document.getElementById(oid);
        const btn = document.getElementById(id);
        console.log(targetDiv.style.display)
        if (btn.click){
        if (targetDiv.style.display === "block") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "block";
        }
    };

    }
    const checkthroughfood = (id, food) => {
       onClickFunc('hidden2', id)
       filterFood(food);
   }

    const checkthroughprice = (pricefilter) => {
        return pricefilter

    }

    const originalFunc = () => {
        const el = document.getElementsByClassName('checker')
        for (let i=0; i< el.length; i++){
            el[i].checked=false;  
        }
        const targetDiv = document.getElementById('hidden');
        targetDiv.style.display = "block"
        const targetDiv2 = document.getElementById('hidden2');
        targetDiv2.style.display = "block"
        return original();
    }



    return(
        <div> 
            <div class="checkbox item_background">
            <h3 style={{color:"brown"}}> Filters:</h3>
            <div style={{display:"block"}}> 

            <div id='hidden' style={{display:'block'}}>
            <div style={{}}><label> Locations: </label></div>
            <div><label><input className={'my-button'} type="button" id='artic' onClick={() => checkthroughId('artic', 'Artic')}/> Artic</label></div>
            <div><label><input className={'my-button'} type="button"id='africa' onClick={() => checkthroughId('africa','Africa')}/> Africa</label></div>
            <div><label><input className={'my-button'} type="button"id='asia' onClick={() => checkthroughId('asia','Asia')}/> Asia</label></div>
            <div><label><input className={'my-button'} type="button" id='ant'  onClick={() => checkthroughId('ant','Antartica')}/> Antartica</label></div>
            <div><label><input className={'my-button'} type="button" id='north' onClick={() => checkthroughId('north', 'North America')} /> North America</label></div>
            </div>

            <div id='hidden2' style={{display:"block"}}>
            <div style={{marginTop:"1em"}}><label> Type: </label></div>
            <div><label><input className={'my-button'} type="button"  id='c' onClick={() => checkthroughfood('c','carnivore')}/> Carnivore</label></div>
            <div><label><input className={'my-button'} type="button" id='o' onClick={() => checkthroughfood('o','omnivore')}/> Omnivore</label></div>
            <div><label><input className={'my-button'} type="button" id='h' onClick={() => checkthroughfood('h','herbivore')}/> Herbivore</label></div>
            </div>
            

            <div id='hidden3' style={{display:"block"}}>
            <div style={{marginTop:"1em"}}><label> Price: </label></div>
            <div><label><input className={'my-button'} type="button" id='original' onClick={() => by_id()}/> Original</label></div>
            <div><label><input className={'my-button'} type="button" id='low' onClick={() => checkthroughprice('low', lowtohigh())}/> Low to High</label></div>
            <div><label><input className={'my-button'} type="button" id='high' onClick={() => checkthroughprice('high', hightolow())}/> High to Low</label></div>
            </div>
            </div>
            <div style={{marginTop:'2em'}}><label><input className={'my-button'} type="button" id='og' onClick={() => originalFunc()}/> Reset</label></div>


        </div>        
        </div>

    )
}

export default Filter