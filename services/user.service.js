const usersService = {
    findByUid: uid => {
        return firebase.firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then(doc => {
                return doc.data();
            });
    },
    save: (uid, user) => {
        return firebase.firestore()
            .collection("users")
            .doc(uid)
            .set(user);
    }
};