# Projektarbete: Webbshop

Front end och back end i kursen Dynamisk webbutveckling.

## Hur du kör projektet
Kör först npm install i din terminal:

´npm install´

Starta sedan servern:

´node server.js´

Du får då ett meddelande i terminalen att "Server is running". Gå till din webbläsare och skriv in localhost:3000. Sidan öppnas då i din webbläsare. Alternativt kan du i terminalens rot navigera till client ´cd client´ och sedan skriva ´npm start´.

## För att logga in som Admin

Email: david@tech.com
Lösenord: 1234


## Kravspecifikation på projektet:
• Alla sidor skall vara responsiva. (G) **KLAR**
• Arbetet ska implementeras med en React-frontend och en Express-backend. (G) **KLAR**
• Skapa ett ER-diagram och koddiagram, detta ska lämnas in vid idégodkännandet G) **KLAR**
• Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet (G) **KLAR**
• All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm) (G) **KLAR**
• Man ska kunna logga in som administratör i systemet (G) **KLAR (admin-behörighet är sparat i atlas)**
• Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen (VG) 
• En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)
• Inga lösenord får sparas i klartext i databasen (G) **KLAR**
• En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G) **KLAR**
• Administratörer ska kunna uppdatera antalet produkter i lager från admindelen av sidan (G) **KLAR**
• Administratörer ska kunna se en lista på alla gjorda beställningar (G) **KLAR**
• Administratörer ska kunna markera beställningar som skickade (VG)
• Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G) **KLAR**
• Från sidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara de produkter som tillhör en kategori (G) **KLAR**
• Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G) **KLAR**
• En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G) **KLAR (kommer ej till utcheckning utan att logga in)**
• När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (VG)
• Besökare ska kunna välja ett av flera fraktalternativ (G) **KLAR**
• Tillgängliga fraktalternativ ska vara hämtade från databasen (G) **KLAR**
• Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)
• Administratörer ska kunna lägga till och ta bort produkter (VG)
• Backendapplikationen måste ha en fungerande global felhantering (VG)
• Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G) **KLAR**

## Avgränsningar

STORLEK: Vi har flera storlekar på produkterna i vår databas, men då det blev alldeles för mycket jobb valde vi att bara hämta en av storlekarna, så att alla produkter på hemsidan tillhör "small". Det är även "small" som updateras i databasen när admin uppdaterar lagersaldot. Man kan jämföra det med att vi skulle haft en hemsida med bara one size. I framtiden skulle detta kunna utvecklas så att besökaren själv kan välja storlek och att alla uppdateras i databasen, men det har vi alltså valt att vänta med nu. 

ORDER: När man klickar på "freight" inne i admins order-meny, ser man en sammanställning av ordern. Där finns front end med rubriken "shipped?". Denna del är inte i bruk, utan finns där för att det är snyggt. I version 2.0 skulle man kunna inplementera dessa checkboxes 
för att uppdatera statusen på ordrar. 

MODALER: I order och user på adminsidan kommer en modal upp med mer detaljerad information. Denna information är för tillfället hårdkodad, 
och enbart till för att visa hur det kan komma att se ut i framtiden. Modalen för product fungerar att uppdatera lagersaldot med, enligt G-krav. 


