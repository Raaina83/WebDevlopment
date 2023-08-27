const student={
    name:"Raaina",
    roll_no:83,
    chem:94,
    phy:93,
    maths:8206,
    getAvg(){
        let avg=(this.phy+this.chem+this.maths)/3;
        console.log(`${this.name} has average of ${avg}`);
    }
}