Projektarbete: Webbshop

Dynamiskwebbutveckling
Mål:
Ni skall bygga en webbshops-applikation inkluderande en klient och en server. Servern ska vara kopplad till en mongodb databas och vara strukturerad baserad på ett REST-API med resurser. Till er hjälp har ni en uppgiftsbeskrivning samt en kravspecifikation.
Regler
Projektet genomförs i grupper om 4 eller 5 personer
Ert projekt ska skötas från ett gemensamt Github repo. Ni skall använda er av issues och pull request för att strukturera upp erat arbete. I början av projektet skall ni presentera två diagram. Ett ER-diagram över er datastruktur och ett diagram över er kodstruktur. Diagrammen skall uppdateras under projektets gång och lämnas in tillsammans med er kodbas - diagrammen och koden skall stämma överens.
Ett gruppkontrakt skall skrivas på och lämnas in.
Projektledare
Er grupp skall utse en projektledare vars roll utöver alla andras är att samla ihop gruppen och försöka ha en mer övergripande roll över projektet. Det här ansvarar projektledaren för:

- att alla i gruppen har läst och förstått det här dokumentet.
- att projektet flyter på enligt planering och samla gruppen till ev. möten.
- att fokus är på rätt saker och att alla har något att göra.
- ta kontakt med gruppmedlemmar om dom är frånvarande utan att ha meddelat gruppen.
  Betyg
  Projektarbetets betyg beror på er givna idépresentation tillsammans med ert resultat. Alla VG krav behöver inte uppfyllas för betyget VG.
  Redovisningar
  Idégodkännande
  I slutet av veckan ska er grupp presentera en färdig idé på er webbshop tillsammans med en grov sketch på er databasmodell i form av ett enklare ER-Diagram, samt en grov sketch över eran kod i form av ett enklare koddiagram.
  Ni skall även presentera gruppens namn, vem som kommer vara projektledare samt lämna in påskriva gruppkontrakt.
  Inlämning av projektet
  Projektet (kodbas & diagram) skall lämnas in på Zenit.
  Förutom att uppfylla kravspecen, skall erat projekt innehålla en README.md fil där det tydligt skall framgå:
  Hur projektet installeras och körs
  Vid behov: uppgifter att testa med, så som inloggningsuppgifter.
  OBS: Readme filen ska framförallt innehålla en lista över alla kraven i kravspecen nedanför samt en kort kommentar från er - har ni uppfyllt kravet? I så fall, hur?

Presentation
Fredag den 12:e Juni ska ni presentera ert projektarbete med en presentation och genomgång av ert slutresultat. Ni ska i presentationen svara på följande frågor:

- Hur ser ert första ER diagram ut.
- Ert färdiga och normaliserade databasdiagram.
- Vad skiljer sig från när ni gjorde slutarbetet i Javascript 1 kursen - Hur har ni delat upp projektet i moduler, klasser etc?
- Vad känner ni att ni framförallt har lärt er under den här kursen?
  Efter er presentation ska ni vara beredda att svara på ytterligare frågor från lärare och från andra elever.
  Tips när ni sätter igång
  • Prata med varandra - gör en enkel planering - bestäm upplägg, dagar, tider mm. • Läs hela det här dokumentet, det gäller alla i gruppen!
  • Viktigt att ni bestämmer er för en mappstruktur, se tips nedan.
  • Börja inte koda för tidigt.
  • Lägg upp det ni väljer att genomföra från kravspecifikationen som issues på Github. • Gör er egen grupp i Teams för kommunikation.
  • Jobba agilt, stäm av med teamet varje dag och kolla PR’s ofta.
  Hjälp oss lärare hjälpa er!
  Fundera ut bra frågor och ställ dem till oss under handledningen så vi kan förklara för er.

Bakgrund till projektet:
Året är 1992, Waynes World och Charlie Moon går på biograferna. Janne Kemi är en finsk ultramiljonär som bestämt sig för att satsa på en ny e-handeln. Han vill investera i nya hemsidor. Han har anlitat er för att ta fram dessa sidor.
Han har vissa specifika krav från sin IT avdelning som han bifogat som en kravspecifikation. Förutom det har ni fria händer att ta fram en grym idé och tjäna sjuka pengar (åt Janne).
Kravspecifikation på projektet:
• Alla sidor skall vara responsiva. (G)
• Arbetet ska implementeras med en React frontend och en Express backend. (G)
• Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet G)
• Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet (G)
• All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm) (G)
• Man ska kunna logga in som administratör i systemet (G)
• Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen (VG)
• En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)
• Inga Lösenord får sparas i klartext i databasen (G)
• En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G)
• Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)
• Administratörer ska kunna se en lista på alla gjorda beställningar (G)
• Administratörer ska kunna markera beställningar som skickade (VG)
• Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G)

• Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori (G)
• Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G)
• En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G)
• När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (VG)
• Besökare ska kunna välja ett av flera fraktalternativ (G)
• Tillgängliga fraktalternativ ska vara hämtade från databasen (G)
• Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)
• Administratörer ska kunna lägga till och ta bort produkter (VG)
• Backendapplikationen måste ha en fungerande global felhantering (VG)
• Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G)
