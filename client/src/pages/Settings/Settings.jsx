import React, { useEffect, useState } from "react";
import { dummyProfileData } from "../../assets/assets";
import Loading from "../../components/Loading/Loading";
import HeaderSettings from "./HeaderSettings/HeaderSettings";
import ChangePasswordTrigger from "../../components/settings/ChangePasswordTrigger/ChangePasswordTrigger";
import ProfileForm from "../../components/settings/ProfileForm/ProfileForm";
import ChangePasswordModal from "../../components/settings/ChangePasswordModal/ChangePasswordModal";
const Settings = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const fetchProfile = async (params) => {
    setProfile(dummyProfileData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (loading) return <Loading />;

  return (
    <div className="animate-fade-in">
      <HeaderSettings />
      {profile && (
        <ProfileForm
          loading={loading}
          initialData={profile}
          onSuccess={fetchProfile}
        />
      )}
      <ChangePasswordTrigger onClick={setShowPasswordModal} />
      <ChangePasswordModal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </div>
  );
};

export default Settings;
