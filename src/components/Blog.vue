<template>

    <b-row>
      <div class="col">
        <h1>Add Blog Post</h1>

        <form @submit.prevent="isSubmitted = true">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model.trim="post.title">
          </div>

          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              class="form-control"
              id="content"
              v-model.lazy.trim="post.content"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div class="form-group">
            <input
              type="checkbox"
              id="publish-immediately"
              true-value="immediately"
              false-value="later"
              v-model="post.publishImmediately"
            >
            <label for="content">Publish Immediately</label>
          </div>

          <div class="form-group">
            <label>Share on</label>
            <div v-for="(media, index) in formData.socialMedia" :key="index">
              <input type="checkbox" :id="media" :value="media" v-model="post.shareOn">
              <label :for="media">{{media}}</label>
            </div>
          </div>

          <div class="form-group">
            <label>Category</label>
            <div v-for="(category, index) in formData.categories" :key="index">
              <input type="radio" :id="category" :value="category" v-model="post.category">
              <label :for="category">{{category}}</label>
            </div>
          </div>

          <div class="form-group">
            <select class="form-control" id="select-series" v-model="post.series">
              <option value>Choose series</option>
              <option
                v-for="(series,index) in formData.series"
                :key="index"
                :value="series"
              >{{series}}</option>
            </select>
          </div>

          <input type="submit" class="btn btn-primary" value="Publish">
        </form>

        <hr>

        <table class="table table-striped" v-if="isSubmitted">
          <thead>
            <tr>
              <td class="col-xs-6">
                <strong>Field</strong>
              </td>
              <td class="col-xs-6">
                <strong>Value</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{{ post.title }}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td style="white-space: pre;">{{ post.content }}</td>
            </tr>
            <tr>
              <td>Publish immediately</td>
              <td>{{ post.publishImmediately }}</td>
            </tr>
            <tr>
              <td>Share on</td>
              <td>
                <ul>
                  <li v-for="(media,index) in post.shareOn" :key="index">{{ media }}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{{ post.category }}</td>
            </tr>
            <tr>
              <td>Series</td>
              <td>{{ post.series }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-row>
</template>

<script>
export default {
    data(){
        return{
            
            isSubmitted: false,
            post: {
                title: "",
                content: "",
                publishImmediately: "immediately",
                shareOn: ["Facebook"],
                category: "Backend",
                series: "Complete Guide to Elasticsearch",
                
            }
        };
    }
};
</script>