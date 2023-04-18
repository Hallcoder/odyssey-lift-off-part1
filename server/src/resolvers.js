const resolvers = {
Query:{
    //returns an array of Tracks that will be used to populate 
    //our home page
    tracksForHome: (_,__,contextValue) => {
        console.log("Context value",contextValue)
           return   contextValue.dataSources.trackAPI.getTracksForHome();
    },
//get a single track by its id!
track: (_,{id},{dataSources}) => {
    console.log("Here the track is")
  return dataSources.trackAPI.getTrack(id)
}
},
Track:{
    author:(parent,args,{dataSources}) => {
        console.log("Parent",parent);
        console.log("Arguments",args);
        return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules:({id},_,{dataSources}) => {
        return dataSources.trackAPI.getTrackModules(id);
    }
}
};

module.exports = resolvers;