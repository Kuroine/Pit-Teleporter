module.exports = function PitOfPetraxTele(dispatch) {
    
    //Player's CID
    let CID = null;
    //Coordinates for pit
    let coordX = -130619;
    let coordY = -117502;
    let coordZ = -86;
    
    //Hooking player's CID
    dispatch.hook('S_LOGIN', 1, event => {
            CID = event.cid;
    })
    
    //Hooking player's coordinates
   /* dispatch.hook('S_SPAWN_ME', 1, event => {
        //Check coord and comapre
        if(coordX == event.x && coordY == event.y)
        {
            PopTele();
            return false;
        }
    });
	*/
	
	dispatch.hook('C_CHAT', 1, (event) => {
        if (event.message.includes('!pit')) 
		{
			PopTele();
			return false;
		}
		});
    
    //Function to tele in front of the GG boss
    function PopTele() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: -130617.5625,
        y: -114555.453125,
        z: 240,
        w: 16362,
        alive: 1,
        unk: 0 
        })
    }
}