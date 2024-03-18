const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));

    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <div className="grid place-items-center min-h-screen ">
      <form
        id="form"
        className="flex  flex-col gap-y-4 bg-slate-200 p-20 rounded-lg focus-within:shadow-md focus-within:shadow-sky-400"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          className="p-2 rounded-lg outline-none focus:shadow-lg focus:shadow-neutral-500 focus:outline-dashed focus:outline-orange-500 outline-offset-0 outline-4 "
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          className="p-2 rounded-lg outline-none focus:shadow-lg focus:shadow-neutral-500 focus:outline-dashed focus:outline-orange-500 outline-offset-0 outline-4"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          className="p-2 rounded-lg outline-none focus:shadow-lg focus:shadow-neutral-500 focus:outline-dashed focus:outline-orange-500 outline-offset-0 outline-4"
          onChange={handleInputChange}
        />

        <label htmlFor="chek" className="flex gap-2">
          <input
            type="checkbox"
            checked={user.rememberMe}
            id="chek"
            onChange={handleInputChange}
            name="rememberMe"
          />
          Remember me
        </label>

        <button className="bg-sky-400 py-3 rounded-lg font-bold text-zinc-900 uppercase">
          Add User
        </button>
      </form>
    </div>
  );
};
export default App;
