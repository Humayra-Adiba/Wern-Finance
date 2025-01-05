import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
  } from "@nextui-org/react";
  
  const Header = () => {
    return (
      <Navbar
        shouldHideOnScroll
        isBlurred={false}
        className="bg-transparent w-full lg:px-12 md:px-12 px-4"
        maxWidth="xl"
      >
        <NavbarBrand>
          <div className="w-16">
            <img src="/logo.svg"/>
          </div>
  
          <h3 className="font-bold text-lg sm:text-xl">Wern Finance</h3>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="bordered"
              radius="full"
              className="hover:bg-emerald-300 hover:text-black"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  };
  
  export default Header;