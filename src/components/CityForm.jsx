function CityForm({ handleChange, handleSubmit, colors }) {
  return (
    <form onSubmit={handleSubmit} className="form__city">
      <input
        style={colors}
        type="text"
        id="cityInput"
        onChange={handleChange}
        className="input"
        placeholder="City, Country"
      />
      <button style={colors} className="btn__input" type="submit">
        search
      </button>
    </form>
  )
}

export default CityForm
