//loops 

// //for
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// for(let i=0; i<=10; i++)
//     {console.log(`for loop number : ${i}`);
// }

//while

//  let i=0;
// while(i<10){
//     console.log(`while loop number : ${i}`);
//     i++;    
// }






//----------------------------------------


const todos = [{
    id :1,
    text: 'take out',
    isCompleted: true 
},{
    id :2,
    text: 'metting out',
    isCompleted: true 
},{
    id :3,
    text: 'make out',
    isCompleted: false 
}];

// // console.log(todos);
// // console.log(todos[2].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


//loops for todo

// for(let i=0; i<todos.length; i++)
//     {
//         console.log( todos[i].text);  
//     }


//     for(let todo of todos){
//         console.log(todo.id);
//     }

//--------------------------------

//forEach , map, filter
    // todos.forEach(function(todo){
    //     console.log(todo.text);
    // });


    // todos.map(function(todo){
    //     console.log(todo.text);
    // });

    // const todoText = todos.map(function(todo){
    //     return todo.text;
    // })
    

    // const todocompleted = todos.filter(function(todo){
    //     return todo.isCompleted === true;
    // }).map(function(todo){
    //     return todo.text;
    // }).map(function(todo){
    //     return todo.text;
    // });

    // console.log(todocompleted);