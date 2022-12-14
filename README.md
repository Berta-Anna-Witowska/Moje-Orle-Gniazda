# Moje-Orle-Gniazda

**Final project from the JavaScript Developer course**

## MOJE ORLE GNIAZDA

Jest to projekt prostej aplikacji, która dostarcza podstawowe informacje o Jurze Krakowsko-Częstochowskiej, Szlaku Orlich gniazd, oraz wybranych miejscach na szlaku.
Można tu także obejrzeć galerię zdjęć, a po zalogowaniu również dodawać wybrane pozycje do listy miejsc, które chcielibyśmy odwiedzić, oraz w sekcji "Moje zapiski" dodawać swoje notatki z podróży.

Aplikacja będzie rozwijana o nowe funkcjonalności.

---

### Install:

Projekt zbudowany w oparciu o vite.
creating vite project

```bash
npm create vite@latest moje-orle-gniazda --template react
```

### installation

```bash
npm install
```

### SASS

```bash
npm install -D sass
```

### emailJS

https://www.emailjs.com/

```bash
npm i emailjs-com
```

### supabase

https://app.supabase.com/projects

```bash
npm i @supabase/supabase-js
```

### React router

```bash
npm install --save react-router-dom
```

### Toasters and tooltips

https://evergreen.segment.com/

```bash
npm install evergreen-ui
```

---

# OPIS PROJEKTU

---

## _Logowanie_

###

//screenshot

#### Fragment kodu - **SignIn**

```javascript
const loginUser = async (e) => {
  e.preventDefault();

  const [email, password] = e.target.elements;

  let {
    data: {user},
    error,
  } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    toaster.warning("Pojawił się problem. Spróbuj jeszcze raz!");
    return;
  }
  toaster.success("Logowanie powiodło się!");
  navigate("/trailbaseview");
};
```

---

## _Contact_

#### Możliwość wysyłania wiadomości bezpośrednio na skrzynkę pocztową za pomocą emailJS, dostępne dla wszystkich użytkowników.

//screenshot

---

## EmailJS Reference:

#### EmailJS API keys:

```http
  https://dashboard.emailjs.com/admin/account
```

| Parameter    | Type     | Description   |
| :----------- | :------- | :------------ |
| `Public key` | `string` | **Required**. |

| Parameter     | Type     | Description   |
| :------------ | :------- | :------------ |
| `Private key` | `string` | **Required**. |

#### EmailJS Service ID:

```http
https://dashboard.emailjs.com/admin
```

| Parameter    | Type     | Description   |
| :----------- | :------- | :------------ |
| `Service ID` | `string` | **Required**. |

---

#### Fragment kodu - **Contact**

```javascript
emailjs;
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(emailJS_serviceKEY, template, form.current, publicKEY).then(
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

## _Widok szlaku_

#### Podgląd całego szlaku z możliwością przeniesienia się do opisu konkretnego miejsca.

//screenshot

---

## _Miejsca na szlaku_

#### Opisy, linki oraz ilustracje pobierane z bazy danych, wyświetlone za pomocą funkcji _map_.

//screenshot

---

## _Zapiski z podróży_

### Dodawanie notatek

//screenshot

## SUPABASE API Reference

```http
  https://app.supabase.com/projects
```

| Parameter      | Type     | Description   |
| :------------- | :------- | :------------ |
| `Supabase url` | `string` | **Required**. |

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `Supabase api key` | `string` | **Required**. |

---

#### Fragment kodu - **MyTripsAddNew**

```javascript
const addPost = async (e) => {
  e.preventDefault();

  const [title, localization, description] = e.target.elements;

  const {data, error} = await supabase.from("post").insert([
    {
      user_id: userId,
      title: title.value,
      localization: localization.value,
      description: description.value,
    },
  ]);
  if (error) {
    toaster.danger("Dodawanie nie powiodło się!");
  }
  toaster.success("Zmiany zostały zapisane!");
  e.target.reset();
};
```

---

##Fonts and icons

- [Fontawesome](https://fontawesome.com/icons)

---

##Deployment

#### Project is now live at _Netlify_

```https
// Link do projektu
```

---

## License

[Apache License](https://www.apache.org/licenses/LICENSE-2.0)
