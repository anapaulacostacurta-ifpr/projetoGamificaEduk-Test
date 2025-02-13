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
    save: (uid, users) => {
        return firebase.firestore()
            .collection("users")
            .doc(uid)
            .add(users);
    }
};