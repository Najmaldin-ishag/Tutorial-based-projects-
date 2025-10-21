import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row>
        <Heading as="h3" style={{ display: "block" }}>
          Update user data:
        </Heading>
      </Row>
      <UpdateUserDataForm />

      <Row>
        <Heading as="h3">Update user password: </Heading>
        {/* <p>Update user password form</p>: */}
      </Row>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
