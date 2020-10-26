const pitanja=[
    {Pitanje:'Koji zbroj karata će biti najbolji, ako ste se okušali u ajncu?',
    odgovori:[{'11':false},{'21':true},{'31':false}] },
    {
        Pitanje:'Žrtva plumbizma, obično završi kod liječnika jer se otrovala-čime?',
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
       odgovori:[{'Neo':true},{'Pto':false},{'Lem':false}],
   },
   {
       Pitanje:'Sevilla je dala Don Juana, a koji je talijanski grad iznjedrio Casanovu',
       odgovori:[{'Siena':false},{'Venecija':true},{'Genova':false}],
   },
   {
       Pitanje:'Štitnici protiv udara groma je',
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
       Pitanje:'Pjesma kojeg banda jasno poručuje: "WE DONT NEED EDUCATION"',
       odgovori:[{'Metallica':false},{'Iron Maiden':false},{'Pink Floyd':true}]
   },
   {
       Pitanje: 'Koja je formula natrijeva klorida, odnosno poznate kuhinjske soli?',
       odgovori:[{'Na2Cl':false},{'NaCl':true},{'NaCl2':false}]
   },
   {
    Pitanje: 'Koji je MMA borac 2013 pobijedio Andersona Silvu uzevši mu na taj način pojas u srednjoj kategoriji?',
    odgovori:[{'Weidman':true},{'Belfort':false},{'Jones':false}]
},
{
    Pitanje: 'Za uređivanje HTML elemenata koristi se',
    odgovori:[{'CSS':true},{'Likra':false},{'RAWA':false}]
},
{
    Pitanje: ' Koji je glumac osvojio najboljeg glumca Oscara za filmove Philadelphia (1993) i Forrest Gump (1994)?',
    odgovori:[{'Sean Penn':false},{'Sean Connery':false},{'Tom Hanks':true}]
},
{
    Pitanje: ' Koji su film iz 1982. godine filmski fanovi odlično prihvatili zbog prikazivanja ljubavi mladog dječaka iz predgrađa i izgubljenog, dobroćudnog i rodnog posjetitelja s drugog planeta?',
    odgovori:[{'Nebo':false},{'Go to Mars':false},{'I izvanzemaljski':true}]
},
{
    Pitanje: ' Koji film iz 2008. godine u glavnoj ulozi Chritian Bale sadrži ovaj citat: "Vjerujem da vas sve što ne ubije, jednostavno učini ... strancima."',
    odgovori:[{'American Psycho':false},{'The Dark Knight':true},{'The Machinist':false}]
},
{
    Pitanje: ' Wimbledon 2017 pobijedio je 14. nositelj koji je iznenađujuće pobijedio Venus WIlliams u finalu. Tko je ona?',
    odgovori:[{'Valentina Kovalenko':false},{'Maria  Sharapova':false},{'Garbiñe Muguruza':true}]
},
{
    Pitanje: ' Koliko igrača ima u olimpijskom timu za curling?',
    odgovori:[{'5':false},{'4':true},{'3':false}]
},
{
    Pitanje: ' Ako biste mogli preraditi milijardu atoma u sekundi, koliko bi vam godina trebalo da teleportirate tipično ljudsko biće?',
    odgovori:[{'200 milijardi godina':true},{'155 milijuna godina':false},{'150 tisuća godina':false}]
},
{
    Pitanje: 'Tko su bili strijelci u finalu CL 2009 ManChester United vs Barcelona?',
    odgovori:[{'Villa, Iniesta':false},{'Iniesta, Messi':false},{'Etto i Messi':true}]
},
{
    Pitanje: 'Hrvat kaže da će se okupati u Jadranu, a Irac u?',
    odgovori:[{'MitlandSea':false},{'Irskom':true},{'Kaspijskom':false}]
},
{
    Pitanje: 'Dođemo li u Hrvatsku s deset eura , imat ćemo 74,4 kn, a u Poljsku ?',
    odgovori:[{'38,8 zloty':false},{'70,3 zloty':false},{'45.81 zloty':true}]
},
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
     } 
}
// **** END- FUNK. ZA PRIKAZ ****

// **** FUNK. ZA ODGOVOR****
    odabrano=async(e)=>{
       
        let pravoPitanje=  pitanje.odgovori[(Number(e.target.id))];
        let konacnoPitanje= await (Object.values(pravoPitanje)).toString()      
        console.log(konacnoPitanje);
       if((konacnoPitanje==='true')===true){
           screen.innerText=('ODGOVOR JE TOČAN'); 
           screen2.style.display='none';
     
        setTimeout(async()=>{
           await numberGet()
        pitanje=  pitanja[(numberGet())];
        screenGet();
        },2000)
     
           
       }
      
     else(screen.innerText=('ODGOVOR JE NETOČAN'),screen2.style.display='none',setTimeout(()=>{(screen.innerText=('PRITISNITE GUMB ZA PONOVNU IGRU')),btn.style.display='block'},2000)

     )}
 // **** END- FUNK. ZA ODGOVOR****       
     
  aScreen[0].addEventListener('click',odabrano);
  aScreen[1].addEventListener('click',odabrano)
  aScreen[2].addEventListener('click',odabrano)

zapocni=async()=>{
    await numberGet();
   await screenGet();
}