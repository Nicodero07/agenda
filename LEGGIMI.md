# Agenda – versione web per iPhone (GitHub Pages)

Niente Mac, niente Xcode, niente scadenza ogni 7 giorni. È una pagina web che, aggiunta alla schermata Home, si apre a tutto schermo come un'app.

## 1. Mettila su GitHub (10 minuti, dal computer)
1. Crea un account gratuito su **github.com** (se non ce l'hai già).
2. In alto a destra **+** → **New repository**.
   - Repository name: `agenda`
   - **Public** (con l'account gratuito GitHub Pages funziona solo con i repository pubblici)
   - **Create repository**
3. Nella pagina del repository: **Add file → Upload files**. Trascina **tutti i file di questa cartella** (`index.html`, `orario.json`, `manifest.json`, `sw.js` e le immagini `.png`), poi **Commit changes**.
4. **Settings → Pages**. In *Build and deployment* scegli Source **Deploy from a branch**, Branch **main**, cartella **/ (root)** e premi **Save**.
5. Dopo un minuto circa l'indirizzo è `https://TUO-NOME-UTENTE.github.io/agenda/`.

## 2. Mettila sulla schermata Home dell'iPhone
1. Apri il link con **Safari** (non con Chrome).
2. Tocca **Condividi** (il quadrato con la freccia) → **Aggiungi alla schermata Home** → **Aggiungi**.
3. Da quel momento la apri dall'icona, a tutto schermo.

## Cosa c'è dentro
- **Lezioni ITS** dall'orario Excel e **turni in radio** (15:30 – 18:30) nei giorni in cui finisci entro le 13:00. Non ci sono turni nei festivi, mentre nelle settimane di vacanza ITS ci sono.
- **I tuoi impegni**: li aggiungi dal **+** nella Home. Per eliminarne uno lo tocchi nella scheda Settimana.
- **Notizie** di sport, motori, Monza e Brianza, Muggiò e Milano. In Impostazioni → Notizie puoi aggiungere parole da cercare.

## Da sapere
- **Il repository è pubblico**: chi conosce l'indirizzo vede l'orario delle lezioni (materie e aule). I nomi dei docenti li ho tolti. I tuoi impegni personali **non** finiscono su GitHub: restano solo nel tuo iPhone.
- **Gli impegni personali stanno nell'app**, non nel Calendario dell'iPhone. Se cancelli l'icona dalla Home o i dati di Safari, si perdono.
- **Notizie**: Safari non può leggere i feed delle notizie direttamente, quindi l'app passa da due servizi gratuiti (rss2json e allorigins). Se un giorno non vanno, si vedono comunque lezioni e impegni.
- **Notifica del mattino**: una pagina web non può mandarla da sola. In Impostazioni → Buongiorno trovi come fare con l'app Comandi.
- **Se l'orario cambia**: mandami il nuovo Excel. Ti preparo un nuovo `orario.json` e lo ricarichi su GitHub (Add file → Upload files, che sostituisce il vecchio file).

## Cambiare l'icona
iOS non permette di modificare l'icona di un collegamento già sulla Home. Per cambiarla:
1. Sostituisci `apple-touch-icon.png` su GitHub con la nuova immagine (quadrata, 180×180 px, stesso nome).
2. Sull'iPhone tieni premuta l'icona → **Rimuovi** → **Elimina dalla schermata Home**.
3. Riaprila da Safari e rifai **Aggiungi alla schermata Home**.

⚠️ Togliendo l'icona si possono perdere gli impegni personali salvati, quindi conviene cambiare l'icona **prima** di inserirli.
