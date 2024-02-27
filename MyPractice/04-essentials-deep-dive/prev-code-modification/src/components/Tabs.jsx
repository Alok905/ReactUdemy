export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // Simple logic is that any component should be starting with capital letter alphabet, otherwise it take is as any normal variable instead of component
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      {/* It will see the buttonsContainer as a custom component so we have to create a custom element making it capitalize as above */}
      {/* <buttonsContainer>{buttons}</buttonsContainer> */}

      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
