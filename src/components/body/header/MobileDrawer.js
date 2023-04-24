import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  RadioGroup,
  Radio,
  Stack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button colorScheme="grey" onClick={onOpen}>
        <img style={{ width: "4rem" }} src="./images/menu.svg" alt="" />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent style={{ backgroundColor: "#A74800" }}>
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <div className="drawer-link">
              <a>Home</a>
              <a>Call with Asrologer</a>
              <a>Lice (Coming Soon)</a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
