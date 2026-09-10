const fs = require('fs');

let html = fs.readFileSync('blog-details.html', 'utf8');
const scriptBackup = fs.readFileSync('blogData_backup.txt', 'utf8');

const match = scriptBackup.match(/<script>[\s\S]*const blogData = \{[\s\S]*?<\/script>/);

if (match) {
    html = html.replace(/<script src="js\/components\.js"><\/script>/,
        '<script src="js/theme.js"></script>\n    <script src="js/components.js"></script>\n    <script src="js/navigation.js"></script>\n    ' + match[0]
    );
    fs.writeFileSync('blog-details.html', html);
    console.log('Restored blogData successfully.');
} else {
    console.log('Regex match failed on blogData_backup.txt');
}
