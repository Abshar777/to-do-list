export default function date(){
    const currentDate = new Date();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    
   
    return  `${day} ${month} ${year}`;

    
   
}
