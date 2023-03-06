import { Container, Center, Text, Divider } from "@mantine/core";

const Footer = () => {
  return (
    <>
      <Divider my={40} />
      <Container size={980} my={40}>
        <Center>
          <Text>Made with ❤️ in Cambodia Alchemy fams.</Text>
        </Center>
      </Container>
    </>
  );
}

export default Footer;