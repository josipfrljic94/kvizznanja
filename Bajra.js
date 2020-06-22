const pitanja=[
    {Pitanje:'Koji zbroj karata će biti najbolji, ako ste se okušali u ajncu?',
    odgovori:[{'11':false},{'21':true},{'31':false}] },
    {
        Pitanje:'žrtva plumbizma, obično završi kod liječnika jer se otrovala-čime?',
        odgovori:[{'živa':false},{'metan':false},{'olovo':true}]
    },
    {
        Pitanje:'Što nije na popisu djela Hansa Christiana Andersena?',
       odgovori:[{'Snježnja kraljica':true},{'Carevo novo ruho':false}, {'Kraljević i prosjak':false}]
   },
   {
       Pitanje:'Koja je najmanja država na svijetu, s površinom od samo 44hektara?',
       odgovori:[{'Monako':false},{'Vatikan':true},{'Nica':false}]
   },
   {
       Pitanje:'Koji kemijski element svjetluca u tami i bilježimo ga simbolom "P"?',
        odgovori:[{'Flour':false},{'Fosfor':true},{'Polonij':false}]
   },
   {
       Pitanje:'U kojem je gradu 1983. otvoren prvi Disneyjev park izvan SADa ?',
       odgovori:[{'u Tokyju':true},{'u Hong Kongu':false},{'u Parizu':false}]
   },
   {
       Pitanje:'Koje ime ne nosi nijedan lik u Shakespeareovu "Hamletu" ',
       odgovori:[{'Rosencrantz':false},{'Humperdinck':true},{'Guildenstern':false}],
   },
   {
       Pitanje:'Kojim hakerskim pseudonimom u filmu "Matrix" Keanu Reeves skriva svoj identitet?',
       odgovori:[{'Leo':true},{'Pto':false},{'Lem':false}],
   },
   {
       Pitanje:'Sevilla je dala Don Juana, a koji je talijanski grad iznjedrio Casanovu',
       odgovori:[{'Siena':false},{'Venecija':true},{'Genova':false}],
   },
   {
       Pitanje:'Kojom se brzinom kreće onaj koji ide najbrže',
       odgovori:[{'gromobran':true},{'kišobran':false},{'padobran':false}],
   },
   {
       Pitanje:'Kojom se brzinom kreće onaj koji ide najbrže',
       odgovori:[{'metrom u sekundi':true},{'kilometrom na sat':false},{'milja na sat':false}],
   },
   {
       Pitanje:'Koje životinje vole svi članovi kinološkog društva',
       odgovori:[{'pse':true},{'konje':false},{'mačke':false}]
   },
   {
       Pitanje:'Za što su posebno nadareni bili glavni likovi iz filmova "Genijalni Um" i "Dobri Will Hunting"',
       odgovori:[{'za kemiju':false},{'za matematiku':true},{'za glazbu':false}]
   },
   {
       Pitanje:'Pjesma kojeg banda jasno poručuje',
       odgovori:[{'Metallica':false},{'Iron Maiden':false},{'Pink Floyd':true}]
   },
   {
       Pitanje: 'Koja je formula natrijeva klorida, odnosno poznate kuhinjske soli?',
       odgovori:[{'Na2Cl':false},{'NaCl':true},{'NaCl2':false}]
   }
]
// ****SELEKTORI****

const screen= document.querySelector('.text-screen');
const aScreen= document.querySelector('.a-screen').children;
const screen2=document.querySelector('.a-screen');
const btn= document.querySelector('.btn-back');
// **** END-SELEKTORI****

// **** GLOBALNA VARIJABLA****
const brojPitanja=pitanja.length;

// **** FUNK. ZA RANDOM BROJ
numberGet=()=>{
    return (Math.floor(Math.random() *(brojPitanja)))
}

let pitanje= pitanja[numberGet()];
// **** END - FUNK. ZA RANDOM BROJ****

// **** FUNK. ZA PRIKAZ ****
screenGet=()=>{
    screen2.style.display='flex';
    btn.style.display='none';
    screen.innerText=(pitanje.Pitanje);
    for (i=0;i<3;i++){
     aScreen[i].innerText=((Object.keys((pitanje.odgovori[i]))).toString())
     console.log('evo me tu',(Object.keys((pitanje.odgovori[i]))).toString());
     } 
}
// **** END- FUNK. ZA PRIKAZ ****

// **** FUNK. ZA ODGOVOR****
    odabrano=(e)=>{
       
        let pravoPitanje=pitanje.odgovori[(Number(e.target.id))];
        let konacnoPitanje=(Object.values(pravoPitanje)).toString()      
        console.log(konacnoPitanje);
       if((konacnoPitanje==='true')===true){
           screen.innerText=('ODGOVOR JE TOČAN'); 
           screen2.style.display='none';
     
        setTimeout(()=>{
            numberGet()
        pitanje=pitanja[(numberGet())];
        screenGet();
        },2000)
     
           
       }
      
     else(screen.innerText=('ODGOVOR JE NETOČAN'),screen2.style.display='none',setTimeout(()=>{(screen.innerText=('PRITISNITE GUMB ZA PONOVNU IGRU')),btn.style.display='block'},2000)

     )}
 // **** END- FUNK. ZA ODGOVOR****       
     
  aScreen[0].addEventListener('click',odabrano);
  aScreen[1].addEventListener('click',odabrano)
  aScreen[2].addEventListener('click',odabrano)

zapocni=()=>{
    numberGet();
    screenGet();
}