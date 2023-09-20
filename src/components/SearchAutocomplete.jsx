import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api"
import axios from "axios"

function Autocomplete({ handleSubmit }) {
  const [search, setSearch] = useState(null)

  const handeOnChange = (searchData) => {
    setSearch(searchData)
    handleSubmit(searchData)
  }

  const loadOptions = async (inputValue) => {
    const response = await axios.get(
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )

    if (response.data.data.length > 0) {
      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`
          }
        })
      }
    } else {
      return {
        options: []
      }
    }
  }
  const customStyles = {
    // provide correct types here
    control: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      border: "2px solid #ccc",
      boxShadow: state.isFocused ? "0 0 0 2px #3699FF" : null,
      backgroundColor: "#ffffff",
      color: "black",
      minWidth: "30vw",
      fontFamily: "Mitr"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: "black"
    })
  }

  return (
    <div className="form__city">
      <AsyncPaginate
        styles={customStyles}
        placeholder="Search for city"
        debounceTimeout={1000}
        value={search}
        onChange={handeOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Autocomplete
