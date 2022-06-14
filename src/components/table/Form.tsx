import { FC, useState } from "react"

import { IUser } from "./Table";

const initialState: IUser = {
  firstName: "",
  lastName: ""
}

interface IProps {
  saveData: (data: IUser) => void;
}

export const Form: FC<IProps> = ({ saveData }) => {
  const [formData, setFormData] = useState<IUser>(initialState)

  const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, firstName: e.currentTarget.value })
  }

  const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, lastName: e.currentTarget.value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    saveData(formData);
    setFormData(initialState);
  }

  return (<form>
    <div>
      <label htmlFor="firstName">Imię: </label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => handleFirstNameChange(e)} />
    </div>
    <div>
      <label htmlFor="lastName">Nazwisko: </label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => handleLastNameChange(e)} />
    </div>
    <button type="submit" value="Submit" onClick={handleSubmit}>Zapisz</button>
  </form>)
}