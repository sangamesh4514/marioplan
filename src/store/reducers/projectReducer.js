const init={
  projects:[
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

 const projectReducer=(state=init,action)=>{
   switch(action.type) {
     case 'CREATE_PROJECT':
        console.log("we did this",action.project)
         return state
     case 'CREATE_PROJECT_ERR':
        console.log("errorrrrrrrrrrrrrrrrrrrrrr")
        return state
     default:
      return state
   }

}
export default projectReducer;
