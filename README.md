# Remote Controller App

Dette er min (chri659y) aflevering af en app som overholder følgende krav:

1. ✅ Eleven kan udvikle en appløsning, som manipulerer eksterne data, herunder f.eks. fjernstyrer ting over internettet, og husker opsætninger imellem flere udførsler af den pågældende app.
2. ✅ Eleven kan selvstændigt udvikle en appløsning.
3. ✅ Eleven kan vælge det bedst egnede udviklingsværktøj til en given opgave, under hensyntagen til crossplatform-kompatibilitet og performance.
4. ✅ Eleven kan programmere en appløsning, der kan kommunikere med eksterne datakilder, så som databaseserver, web API o.l.
5. ✅ Eleven kan programmere en appløsning, der kan kommunikere med andre apps på enheden ved f.eks. at opdatere en kontakt, sende en SMS eller hente GPS-data.
6. ✅ Eleven kan programmere en appløsning med threads med det formål at udføre parallelle opgaver.
7. ✅ Eleven kan optimere koden i appløsningen med henblik på optimal udnyttelse af enhedens ressourcer.
8. ✅ Eleven kan redegøre for mulige sikkerhedsproblemer når en app skal kommunikere med eksterne datakilder og tage højde for disse i forbindelse med udvikling af en appløsning ved f.eks. at kryptere.
9. ✅ Eleven kan gennem en test dokumentere funktionaliteten i en udviklet appløsning.

## Hvordan er disse krav opfyldt?
### 1. Manipulering af eksterne data
Appen benytter sig af en extern database hosted ved Google kaldet Firestore, denne database levere fordele som real-time opdatering og ændringer.
Ved dette kan vi i real time opdatere tekst og title i appen og vise det på en monitor. Dermed har jeg udført kravet om manipulering af extern data.
### 2. Appen er selvstændigt udviklet
Appen er blevet udviklet alene af mig (chri659y) i løbet af ugen under faget App Programmering 3.
### 3. Benyttelse af et framework som supportere flere platforme.
Denne app benytter frameworket [Capacitor](https://capacitorjs.com/) som bliver brugt bag Iconic et stort UI framework for apps. Frameworket er designet til at egne sig til IOS, Android og Web, men har også community udvidelser som til electron aka skrivebords programmer.
### 4. Kommunikation med eksterne datakilder
Som beskrevet i punkt 1 bliver det brugt en ekstern datakilde via Firebase som er en database / datakilde pga. dens udvidet funktioner som real time opdatering via web stream / API.
### 5. Brug af native funktioner i appen
Appen indeholder også brug af native funktioner til at hente koordinaterne på mobilen for at udfylde dette krav.
### 6. Appen har brug af threads
Appen brugere allerede thread til at udføre parallelle opgaver via capacitor igennem dens web view, som appen bruger. Men for at give forklaring til dette punkt er det også muligt at benytte sig af web workers, da appen er baseret på et web view og dermed tage brug af multi threading på alle platforme som både PC og Mobil, under samme codebase.
### 7. Appen brugere kun ressourcer der er behov for
Appen bruger som udgangspunkt ikke flere ressourcer end en normal app, men der er stadig memory bekostning ved brug af web view, men dette er nødvendigt for at have en optimal udvikler oplevelse (vedligeholdelse og udvidelser).

Ved brug af Capacitor kan man også udvikle native udvidelser til frameworket via deres plugin api, og dermed lave native performance optimeringer. Dette er typisk gjort når der er tale om lange lister, da web views ikke er optimale i memory når der er tale om 10000+ elementer i en liste.
### 8. Sikkerheds problemer ved eksterne datakilder
Apps har næsten altid et svag punkt ved at benytte sig externs datakilder. Dette er typisk i forbindelse med dårligt kode som ikke benytter sig af en krypteret forbindelse eller at der bliver talt direkte med backend og ikke igennem en API.

I denne app har vi dog ingen svagpunkter ved vores eksterne kilde, da datakilden er åben som udgangspunkt, her har vi ingen authentication og bruger en public key som adgang. Dette gør at vi ikke har svagpunkter der.

Andre svagpunkter en mobil kan have via apps, kan være falske update servere på et netværk som gør man installere en hijacked version af en app, men dette er mere et netværks sikkerhedshul end via appen.
### 9. Unix og Integration tests
Funktionaliteten på en app kan testes via en integrations test og unit test for backend funktioner (typisk utility funktioner når vi taler apps).
Den bedste løsning for en app som benytter sig af web view er ved brug af integrations tests, da man kan predefinere hvad resultat man ønsker for et interface og hvad resultat knapper giver osv, denne part tester dog ikke om appen faktisk taler med databaser osv, der kan man benytte sig af unit test for connection testing til database. Ved produktion er den bedste løsning dog at have en exception logger i sin app så man kan modtage eller fejl som brugerne oplever i produktion, godt produkt her er fx [sentry](https://sentry.io/)

---
Aflevering af Christian William Hansen (chri659y) 21/02-2021