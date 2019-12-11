<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="fieldset-1"
        description="Let us know your comment."
        label="Enter your comment"
        label-for="review"
      >
        <p id="name" class="mb-2">{{name}}</p>
        <b-form-input class="mb-2" id="review" v-model="review" trim></b-form-input>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form-group>
    </b-form>
    <h3>Comments</h3>
    <b-card class="p-2 mt-2">
      <b-card v-for="comment in comments" :key="comment.id" :title="comment.userName">
        <b-card-text>
          <p>{{comment.content}}</p>
        </b-card-text>
      </b-card>
    </b-card>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      review: "",
      name: "Guest User",
      rating: null
    };
  },
  methods: {
    // ...mapActions({
    //   fetchComments: "fetchComments"
    // }),
    onSubmit(evt) {
      evt.preventDefault();
      let productReview = {
        userName: this.name,
        content: this.review,
        rating: this.rating,
        productId: this.productDetail.id
      };
      this.$store.dispatch("addCommentAction", productReview);
      this.review = null;
      this.rating = null;
    }
  },
  computed: {
    ...mapState({
      users: state => state.users,
      products: state => state.products,
      productDetail: state => state.productDetail,
      productComments: state => state.productComments
    }),
    ...mapGetters({
      productIsInStock: "productIsInStock"
      // comments: "availableComments"
    }),
    comments() {
      return this.productComments.filter(
        item => item.productId === this.productDetail.id
      );
    }
  }
};
</script>

<style>
</style>