module.exports=function(stuff){
    const query=stuff.data.root.query;
    return query.name+query.suffix;
}