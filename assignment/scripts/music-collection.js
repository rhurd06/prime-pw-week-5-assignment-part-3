console.log('***** Music Collection *****')
let collection = [ ]
function addToCollection(title, artist, yearPublished){
  let album = {title: title, artist: artist, yearPublished: yearPublished};
  collection.push(album);
  return collection;
}
addToCollection('FanMail', 'TLC', '1999');
addToCollection('Some Hearts', 'Carrie Underwood', '2005');
addToCollection('Carnival Ride', 'Carrie Underwood', '2007');
addToCollection('Tailgates & Tanlines', 'Luke Bryan', '2011');
addToCollection('Crash My Party', 'Luke Bryan', '2013');
addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', '2010');
console.log(collection[0]);
console.log(collection[1]);
console.log(collection[2]);
console.log(collection[3]);
console.log(collection[4]);
console.log(collection[5]);
console.log(collection);
function showCollection(collection){
  console.log('The number of items in this array are:', collection.length);
    for (let album of collection){
      console.log('The song titles in my array are:', album.title);
      console.log(album.title, 'by', album.artist, 'published in', album.yearPublished)
    }
} //end showCollection
showCollection(collection);
function findByArtist( artist){
  let carrieUnderwoodSongs = [ ]
    for (let album of collection){
      if (album.artist === artist ){
      //console.log();})
      carrieUnderwoodSongs.push( album );
    }
  }//end for of loop
  return carrieUnderwoodSongs;
}//end findByArtist
console.log(findByArtist('Carrie Underwood'));
console.log(findByArtist('Luke Bryan'));
console.log(findByArtist('Mary'));
function search( artist, yearPublished ){
  let lukeBryanSongs= [ ]
    for (let album of collection){
      if (album.artist === artist && album.yearPublished === yearPublished){
        //console.log();})
        lukeBryanSongs.push (album );
      }
    }//end for of loop
    if (artist === undefined ){
      return collection;
    }
    return lukeBryanSongs;
}//end search
console.log(search('Luke Bryan', '2013'));
console.log(search('Luke Bryan', '2010'));
console.log(search());
