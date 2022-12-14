# Moje-Orle-Gniazda
**Final project from the JavaScript Developer course**

##MOJE ORLE GNIAZDA
Jest to projekt prostej aplikacji, która dostarcza podstawowe informacje o Jurze Krakowsko-Częstochowskiej, Szlaku Orlich gniazd, oraz wybranych miejscach na szlaku.
Można tu także obejrzeć galerię zdjęć, a po zalogowaniu również dodawać wybrane pozycje do listy miejsc, które chcielibyśmy odwiedzić, oraz w sekcji "Moje zapiski" dodawać swoje notatki z podróży.
Aplikacja będzie rozwijana o nowe funkcjonalności.
---

###Install:

Projekt zbudowany w oparciu o vite.
creating vite project
```bash
npm create vite@latest projekt_koncowy --template react
```
###installation
```bash
npm install
```
###SASS
```bash
npm install -D sass
```
###emailJS
```bash
npm i emailjs-com
```
###supabase
```bash
npm i @supabase/supabase-js
```
###React router
```bash
npm install --save react-router-dom
```
###Toasters and tooltips
https://evergreen.segment.com/
```bash
npm install evergreen-ui
```
---

# OPIS PROJEKTU
---
## *Logowanie*
### 
---

## *Contact form*

#### Możliwość wysyłania wiadomości bezpośrednio na skrzynkę pocztową za pomocą emailJS, dostępne dla wszystkich użytkowników.
//screenshot

---

## EmailJS Reference:

#### EmailJS API keys:
```http
  https://dashboard.emailjs.com/admin/account
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Public key` | `string` | **Required**.|


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Private key`      | `string` | **Required**.  |

#### EmailJS Service ID:

```http
https://dashboard.emailjs.com/admin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Service ID` | `string` | **Required**.|

---
#### Fragment kodu - **Contact form**

```javascript
 emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailJS_serviceKEY, template, form.current, publicKEY)
      .then(
        (result) => {
          toaster.success("Wiadomość wysłana!");
        },
        (error) => {
          toaster.danger("Wysyłanie nie powiodło się !");
        }
      );
    e.target.reset();
  };
```
---
## *Widok szlaku*
#### Podgląd całego szlaku z możliwością przeniesienia się do opisu konkretnego miejsca.
//screenshot

---

## *Miejsca na szlaku*
#### Opisy, linki oraz ilustracje pobierane z bazy danych, wyświetlone za pomocą funkcji *map*.

//screenshot


---

##Fonts and icons

 - [Fontawesome](https://fontawesome.com/icons)

---
##Deployment
#### Project is now live at *Netlify*
// Link do projektu
```https
// Link do projektu
```
---

## License
[Apache License](https://www.apache.org/licenses/LICENSE-2.0)
