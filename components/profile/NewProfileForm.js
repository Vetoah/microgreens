function NewProfileForm() {
  return (
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' required id='name' ref={nameInputRef} />
      </div>
      <div>
        <button>Create Profile</button>
      </div>
    </form>
  );
}

export default NewProfileForm;