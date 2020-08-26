import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: { loadedPosts: [], token: null },
    mutations: {
      setPosts(state, loadedPosts) {
        state.loadedPosts = loadedPosts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const idx = state.loadedPosts.findIndex(
          ({ id }) => id === editedPost.id
        );
        state.loadedPosts = [
          ...state.loadedPosts.slice(0, idx),
          editedPost,
          ...state.loadedPosts.slice(idx + 1)
        ];
      },
      setToken(state, idToken) {
        state.token = idToken;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit({ commit }, context) {
        return context.app.$axios
          .$get(`posts.json`)
          .then(data => {
            let posts = [];
            for (let key in data) {
              posts.push({ ...data[key], id: key });
            }
            commit("setPosts", posts);
          })
          .catch(error => {
            context.error(error);
          });
      },
      addPost({ state, commit }, post) {
        return this.$axios
          .$post(`posts.json?auth=${state.token}`, post)
          .then(data => commit("addPost", { ...post, id: data.name }))
          .catch(console.log);
      },
      editPost({ state, commit }, post) {
        return this.$axios
          .$put(`posts/${post.id}.json?auth=${state.token}`, post)
          .then(() => commit("editPost", post))
          .catch(console.log);
      },
      authenticateUser({ commit }, { isLogin, email, password }) {
        let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${
          !isLogin ? "signUp" : "signInWithPassword"
        }?key=${process.env.fbApiKey}`;

        return this.$axios
          .$post(authUrl, { email, password, returnSecureToken: true })
          .then(({ idToken, expiresIn }) => {
            commit("setToken", idToken);

            // local storage and cookie storage
            localStorage.setItem("token", idToken); // persist user token
            Cookie.set("jwt", idToken);

            const expirationDate =
              Date.now() + Number.parseInt(expiresIn) * 1000;
            localStorage.setItem("tokenExpiration", expirationDate); // persist user token
            Cookie.set("expirationDate", expirationDate);

            // can make any other server side call to track some data or some database manipualation
            return this.$axios.$post(
              `${process.env.localhost}/api/track-data`,
              { data: "Authenticated!" }
            );
          })
          .catch(console.log);
      },
      initAuth({ commit, dispatch }, req) {
        let token, expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else if (process.client) {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date() > expirationDate || !token) {
          dispatch("logout");
          return;
        }
        commit("setToken", token);
      },
      logout({ commit }) {
        return new Promise(resolve => {
          Cookie.remove("jwt");
          Cookie.remove("expirationDate");
          if (process.client) {
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpiration");
          }
          commit("clearToken");
          resolve(true);
        });
      }
    },
    getters: {
      loadedPosts: state => state.loadedPosts,
      isAuthenticated: state => state.token != null
    }
  });
};

export default createStore;
