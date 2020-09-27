const initState = {articles: []}
export const articles = (state=initState, action) => {
    switch (action.type) {
        case "GET": return {articles: action.articles};
        case "ADD":
            let temp1 = state.articles;
            temp1.push(action.article);
            return {articles: temp1};
        case "DELETE":
            let temp2 = [];
            for(let i=0;i<state.articles.length;i++){
                if(state.articles[i].id !== action.article.id){
                    temp2.push(state.articles[i])
                }
            }
            return {articles: temp2};
        default : break;
    }
    return state;
}