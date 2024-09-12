import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1 className='mainTitle'>Dokumentasjon</h1>
      <div>
          <h2 className='subTitle'>
            Plan:              
          </h2>
        <p className='text'>
        Start opp pc i bios, og last ned og start opp den nye windows filen.
        </p>
      </div>

      <div>
        <h2 className='subTitle'>
            Oppgaven:
        </h2>
      <div>
      <p className='text'>
        først laster man ned windows på en minnepenn, på en pc som allerede har windows eller linux, mac, så plugget jeg denne minnepennen inn i pcen jeg ville ha windows på. Jeg åpnet pcen i bios, valgte riktig usb med windows på, og trykka next. Jeg slettet alle tidligere partisjonene til disken, og lagde en ny en som jeg ga en go del plass i tilfelle jeg skal oppgradere til en nyere windows senere, og lastet ned windows i denne partisjonen. Etter at nedlastingen hadde startet, og senere blitt ferdig, lagde jeg en offline bruker, starta opp pcen, og sletta Edge web browser.
      </p>
      </div>

      <div>
      <p className='text'>
      Etter dette skulle vi pinge hverandre etter å ha koblet pcene våres til en switch. Dette gjorde vi ved å koble pcene til ethernet porten foran på pulten vår, og koble denne ethernet porten til switchwn i klasserommet. Dette gjør at alle pcene koblet til den switchen can kommunisere, dette brukte vi til å pinge hverandre. Vi fant ut at vi måtte endre en firewall setting for å slippe gjennom ping’ene til en annen person, så vi gjorde dette. Det gjorde at vi kunne sende og få tilbake packets til hverandre. Etter at vi fikk til å sende hverandre ping’s, tok vi tilbake firewall settingsene sånn som de var, så vi ikke kunne bli pinget noe mer.
      </p>
      </div>

      <div>
      <p className='text'>
      Til slutt så skulle vi sette opp en FTP, dette prøvde vi først å gjøre med Windows ftp, dette gikk til hælvete og vi ga opp etter litt over en time med null progress. Etter det bestemte vi oss for å gå til FileZilla som andre grupper hadde brukt og fått bra resultater. Etter litt jobbing og tukling med forskjellige settings og accsess points, fikk vi det til å funke.
      </p>
      </div>

      <div>
        <h2 className='subTitle'>
        Forbedringspotensiale:
        </h2>
      </div>

      <div>
        <p className='text'>
        Planlegg bedre og gjør mer research sånn at jeg kan planlegge best mulig. Jeg må også dokumentere mere underveis sånn at jeg ikke glemmer noe av det jeg har gjort senere. Jeg må også se litt på andre exempler på dokumentasjon så jeg kan ta inspirasjon til en bedre struktur, og huske at jeg skal skrive valgene mine og ikke bare hva jeg har gjort med en generell forklaring.
        </p>
      </div>

      <div>
        <p className='text'>
        Jeg må også lese oppgaven mer ordentlig sånn at jeg kan planlegge bedre, og ha klart nettsider og guides, sånn at jeg kan komme meg gjennom oppgavene effektivt, og komme meg gjennom problemer lettere. 
        </p>
      </div>
      </div>
      
      
    </>
  )
}

export default App
