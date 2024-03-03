import logo from "../assets/logo.png";
const Header = () => {
  return (
	<nav className="py-6 md:py-8  top-0 w-full ">
	<div className="container mx-auto flex items-center justify-between gap-x-6">
		<div className="flex justify-center">
		<a href="/">
			<img className="h-[45px]" src={logo} alt="Lws" />
		</a>
		<h4 className="text-xl p-2"> <span className="italic text-amber-500">Task</span> App</h4>
		</div>
		

	</div>
</nav>
  );
};

export default Header;
