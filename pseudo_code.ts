type Acknowledgment = {
	acknowledge: true,
	insertedID: ObjectId
};

photo : {
  _id: ObjectId,            // ID unique généré par MongoDB
  url: string,              // URL de la photo (ex. lien vers un service de stockage comme AWS S3 ou Firebase)
  latitude: number,         // Coordonnée GPS : latitude
  longitude: number,        // Coordonnée GPS : longitude
  description: string,     // (Optionnel) Description ou légende de la photo
  createdAt: Date           // Date et heure de création de la photo
};

clusters:{
  _id: ObjectId,           // ID unique du cluster
  photos:[{
    _id: ObjectId,            // ID unique généré par MongoDB
    url: string,              // URL de la photo (ex. lien vers un service de stockage comme AWS S3 ou Firebase)
    latitude: number,         // Coordonnée GPS : latitude
    longitude: number,        // Coordonnée GPS : longitude
    description: string,     // (Optionnel) Description ou légende de la photo
    createdAt: Date
  }],      // Tableau d'IDs de photos incluses dans ce cluster
  coordonnées: {                // Centre géographique du cluster
    latitude: number,      // Latitude
    longitude: number      // Longitude
  },
  zoomLevel: number         // Niveau de zoom pour lequel ce cluster est valide
}

//Prendre une photo :
addNewPhoto (photo: File ,metadonnées) : Acknoledegment,


//ajouter la photo a la galerie :
addPhotoToGallery(){
	this.photoService.addNewPhoto
},

type coordonnées = {
	ObjectID(latitude,longitude)
};

//Recupérer la position :
function getCurrentPosition (){
  this.map.coordonnées
}

//imprimer la position actuelle :
function printCurrentPosition (latitude, longitude){
  //sortie position actuelle
};

//linker la photo avec la position actuelle:
function linkPhoto (photoURL, coordonnées){
  return Object
}

//fonction de cluster par rapport au zoom
function zoomCluster (photos,zoomLevel){
  cluster = [],
  if (zoomlevel < 10,100,1000){
    agglomerate all photos in cluster
  }

  return cluster

}


//afficher une modal :
displayModal ()
{
  return Photo
}

//afficher plusieurs modal:
displayMultipleModal() {
  for (let i = 0; cluster.length; i++) {
    displayModal, ++
  }}
