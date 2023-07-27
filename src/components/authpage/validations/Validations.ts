// // this is where the validation will happen

 export class validation{
    
    //this is for validating the regNo
    public validateStudent(regNo:string):boolean{
        let regPattern = /^com\/b\/\d{2}-\d{5}\/\d{4}$/
        return regPattern.test(regNo)

    }

    //testing if the password is correct
// 07/19/2023
    
}

