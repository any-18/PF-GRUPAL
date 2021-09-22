// import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

// import AccountSettings from './AccountSettings';

// const Content = () => {
//   const tabs = ['Account Settings'];

//   return (
//     <Box
//       mt="150px"
//       as="main"
//       flex={2}
//       d="flex"
//       flexDir="column"
//       justifyContent="space-between"
//       pt={5}
//       bg="white"
//       rounded="md"
//       borderWidth={1}
//       borderColor="gray.200"
//       style={{ transform: 'translateY(-100px)' }}
//     >
//       <Tabs>
//         <TabList px={5}>
//           {tabs.map(tab => (
//             <Tab
//               key={tab}
//               mx={2}
//               px={0}
//               py={2}
//               fontWeight="semibold"
//               color="brand.cadet"
//               borderBottomWidth={1}
//               _active={{ bg: 'transparent' }}
//               _value={{ color: 'brand.dark', borderColor: 'brand.blue' }}
//             >
//               {tab}
//             </Tab>
//           ))}
//         </TabList>

//         <TabPanels px={3} mt={5}>
//           <TabPanel>
//             <AccountSettings />
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//     </Box>
//   )
// }

// export default Content;