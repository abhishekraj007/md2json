// import {stream} from 'unified-stream'
import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import toHtml from "rehype-stringify";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import rehypeDocument from "rehype-document";

let contents = unified()
  .use(remarkParse)
  // .use(remarkSlug)
  // .use(remarkToc)
  .use(remarkRehype)
  .use(toHtml)
  .use(rehypeDocument, { title: "Contents" })
  .processSync(fs.readFileSync("js.md"))
  .toString();

contents = contents.replace(/(<ol>)(.*)(<\/ol>)/gims, `$2`);

// document.append(contents)

fs.writeFileSync("./js.html", contents);
