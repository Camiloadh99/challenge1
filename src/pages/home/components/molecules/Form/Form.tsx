import { useInputValue, useInputValueContext } from "hooks/changeInputValue";
import { useHomeContext } from "pages/home/context/homeContext";
import { isValidEmail } from "pages/home/utilities/emailValiation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, InputForm } from "../../atoms";
import "./style.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

enum label {
  buttonLabel = "CLAIM YOUR FREE TRIAL",
}
export default function Form() {
  const navigate = useNavigate();
  const { setSuccesClaim } = useHomeContext();
  const nameForm = useInputValue("");
  const lastNameForm = useInputValue("");
  const emailForm = useInputValue("");
  const passwordForm = useInputValue("");
  const [value, setValue] = useState("");
  const [valueInput, setValueInput] = useState("");

  //Errors

  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleChange = (e: any, value: any) => {
    console.log(e);
    console.log(value);
    setValue(value.year);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!nameForm.value) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!lastNameForm.value) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (!isValidEmail(emailForm.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!passwordForm.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (
      nameForm.value &&
      lastNameForm.value &&
      emailForm.value &&
      passwordForm.value
    ) {
      setSuccesClaim(true);
    }
  };

  return (
    <>
      <div className="mb-4">
        <Badge />
      </div>

      <Card className="mt-4">
        <form action="/" onSubmit={handleSubmit}>
          <InputForm
            {...nameForm}
            placeholder="Name"
            error={nameError}
            labelError="First Name cannot be empty"
          />
          <InputForm
            {...lastNameForm}
            placeholder="Last Name"
            error={lastNameError}
            labelError="Last Name cannot be empty"
          />
          <InputForm
            {...emailForm}
            placeholder={emailError ? "email@example.com" : "Email"}
            type="email"
            labelError="Looks ika this is not an emai"
            error={emailError}
          />
          <InputForm
            {...passwordForm}
            placeholder="Password"
            type="password"
            error={passwordError}
            labelError="Password cannot be empty"
          />

          <Button label={label.buttonLabel} onClick={() => {}} />
          <Button
            label="Scroll"
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
          <Button
            label="ScrollTo"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </form>
        <a href="http://localhost:3000/dashboard/mabeo">Local</a>
        <br></br>
        <a href="https://uat-enduser.garantiefacom.fr/login/mabeo">
          facom subdomain
        </a>
        <br></br>
        <a href="https://uat-enduser.garantiefacom.fr"> facom test</a>

        <h6 className="form__terms ">
          By clicking the button you agree to our
          <span className="form__terms form__terms--color-red">
            <span
              className="pl-1"
              onClick={() => {
                navigate("/terms-and-conditions");
              }}
            >
              <strong>Terms and Services </strong>
            </span>
          </span>
        </h6>
      </Card>
    </>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
