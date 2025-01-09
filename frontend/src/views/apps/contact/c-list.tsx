'use client';

import { useEffect, useState, Fragment } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

// third-party
import { isEmpty } from 'lodash-es';

// project imports
import UserDetails from 'components/application/contact/UserDetails';
import UserEdit from 'components/application/contact/UserEdit';
import ContactList from 'ui-component/cards/ContactList';
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';
import { dispatch, useSelector } from 'store';
import { getContacts, modifyContact } from 'store/slices/contact';

// types
import { KeyedObject } from 'types';
import { UserProfile } from 'types/user-profile';

// assets
const User1 = '/assets/images/users/avatar-1.png';
import { IconSearch } from '@tabler/icons-react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// ==============================|| CONTACT LIST ||============================== //

const CardListPage = () => {
  const [user, setUser] = useState<UserProfile>({});
  const [data, setData] = useState<KeyedObject>({});

  // get all users details
  const { contacts } = useSelector((state) => state.contact);
  const convertData = (userData: UserProfile[]) =>
    userData.reduce((a: KeyedObject, curr) => {
      const firstLetter = curr.name![0]?.toUpperCase();
      if (Object.prototype.hasOwnProperty.call(a, firstLetter)) {
        a[firstLetter].push(curr);
      } else {
        a[firstLetter] = [curr];
      }
      return a;
    }, {});
  useEffect(() => {
    setData(convertData(contacts));
    if (!isEmpty(user)) {
      const idx = contacts.findIndex((item: UserProfile) => item.id === user.id);
      if (idx > -1) setUser(contacts[idx]);
    }
  }, [contacts, user]);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  // edit selected user and modify users data
  const modifyUser = async (u: UserProfile) => {
    await dispatch(modifyContact(u));
  };

  // handle new user insert action
  const [userDetails, setUserDetails] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const handleOnAdd = () => {
    setUser({
      name: '',
      company: '',
      role: '',
      work_email: '',
      personal_email: '',
      work_phone: '',
      personal_phone: '',
      location: 'USA',
      image: User1,
      status: 'I am online',
      lastMessage: '2h ago',
      birthdayText: ''
    });
    setUserDetails(false);
    setUserEdit(true);
  };

  return (
    <MainCard title="Contact List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs zeroMinWidth sx={{ display: userDetails || userEdit ? { xs: 'none', md: 'block' } : 'block' }}>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs zeroMinWidth>
              <OutlinedInput
                id="input-search-card-style1"
                placeholder="Search Contact"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="16px" />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                startIcon={<AddCircleOutlineOutlinedIcon />}
                sx={{ px: 2.75, py: 1.5 }}
                onClick={handleOnAdd}
              >
                Add
              </Button>
            </Grid>

            {Object.keys(data).map((key, index) => (
              <Fragment key={index}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="primary" sx={{ fontSize: '1rem' }}>
                    {key.toUpperCase()}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="row" spacing={0}>
                    {data[key].map((userRow: UserProfile, i: number) => (
                      <Grid item xs={12} key={i}>
                        <ContactList
                          avatar={userRow.avatar}
                          name={userRow.name}
                          role={userRow.role}
                          email={userRow.work_email}
                          contact={userRow.phone}
                          location={userRow.location}
                          onActive={() => {
                            setUser(userRow);
                            setUserDetails(true);
                            setUserEdit(false);
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
        {userDetails && (
          <Grid item sx={{ width: 342, margin: { xs: '0 auto', md: 'initial' } }}>
            <UserDetails
              user={user}
              onEditClick={() => {
                setUserDetails(false);
                setUserEdit(true);
              }}
              onClose={() => {
                setUserDetails(false);
                setUserEdit(false);
              }}
            />
          </Grid>
        )}

        {userEdit && (
          <Grid item sx={{ width: 342, margin: { xs: '0 auto', md: 'initial' } }}>
            <UserEdit
              user={user}
              onSave={(u) => {
                if (u.id) setUserDetails(true);
                setUserEdit(false);
                modifyUser(u);
              }}
              onCancel={(u) => {
                if (u.id) setUserDetails(true);
                setUserEdit(false);
              }}
            />
          </Grid>
        )}
      </Grid>
    </MainCard>
  );
};

export default CardListPage;
