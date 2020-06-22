<?php
require 'function.php';

//Trackjson
//Si la musique a déja été like
//print_r(trackjson(209,2)); //OK
//Si la musique n'a jamais été like
//print_r(trackjson(353,2)); //OK
//Sans personne
//print_r(trackjson(703)); //OK

//like
//Utilisateur qui like une musique
//like(2,353); //OK
//Si la même information est envoyer
//like(2,353); //OK
//Si il like une musique qui est unlike dans la bdd
//like(13,422); //OK

//unlike
//Utilisateur qui unlike une musique non like
//unlike(13,422); //OK
//Si la même information est envoyer
//unlike(13,422); //OK
//Si il unlike un musique qui a été like bdd
//unlike(13,422); //OK

//setReadTime
//Ajout +1 musique écoute
//Ajoute l'ecoute a mp3_ecoute
setReadTime(3,209,56); //OK
//Modifie la date de dernière ecoute
//setReadTime(3,209,56); //OK
