  // 简单的交互效果：表格行悬停高亮
        document.addEventListener('DOMContentLoaded', function() {
            const tableRows = document.querySelectorAll('.wio-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
        });

         // 简单的交互效果：表格行悬停高亮和特殊说明框动画
        document.addEventListener('DOMContentLoaded', function() {
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.wiio-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 特殊说明框动画
            const specialNote = document.querySelector('.wiio-special-note');
            specialNote.style.opacity = '0';
            specialNote.style.transform = 'translateY(20px)';
            specialNote.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                specialNote.style.opacity = '1';
                specialNote.style.transform = 'translateY(0)';
            }, 300);
        });


          // 简单的交互效果：页面加载动画和标题悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const mainContent = document.querySelector('.wpo-main-content');
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 300);
            
            // 章节标题悬停效果
            const chapterTitles = document.querySelectorAll('.wpo-chapter-title');
            chapterTitles.forEach(title => {
                title.addEventListener('mouseenter', function() {
                    this.style.color = '#3498db';
                    this.style.transition = 'color 0.3s ease';
                });
                
                title.addEventListener('mouseleave', function() {
                    this.style.color = '#2c3e50';
                });
            });
            
            // 周标题悬停效果
            const weekTitles = document.querySelectorAll('.wpo-week-title');
            weekTitles.forEach(title => {
                title.addEventListener('mouseenter', function() {
                    this.style.color = '#2980b9';
                    this.style.transform = 'translateX(5px)';
                    this.style.transition = 'color 0.3s ease, transform 0.3s ease';
                });
                
                title.addEventListener('mouseleave', function() {
                    this.style.color = '#3498db';
                    this.style.transform = 'translateX(0)';
                });
            });
        });

          // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.hio-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 周标题悬停效果
            const weekTitles = document.querySelectorAll('.hio-week-title');
            weekTitles.forEach(title => {
                title.addEventListener('mouseenter', function() {
                    this.style.color = '#3498db';
                    this.style.transition = 'color 0.3s ease';
                });
                
                title.addEventListener('mouseleave', function() {
                    this.style.color = '#2c3e50';
                });
            });
            
            // 思考问题悬停效果
            const thoughtQuestion = document.querySelector('.hio-thought-question');
            thoughtQuestion.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e3f2fd';
                this.style.transition = 'background-color 0.3s ease';
            });
            
            thoughtQuestion.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#f8f9fa';
            });
        });

         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.hilo-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 周标题悬停效果
            const weekTitles = document.querySelectorAll('.hilo-week-title');
            weekTitles.forEach(title => {
                title.addEventListener('mouseenter', function() {
                    this.style.color = '#3498db';
                    this.style.transition = 'color 0.3s ease';
                });
                
                title.addEventListener('mouseleave', function() {
                    this.style.color = '#2c3e50';
                });
            });
            
            // 代码块悬停效果
            const codeBlocks = document.querySelectorAll('.hilo-code');
            codeBlocks.forEach(block => {
                block.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#e3f2fd';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                block.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '#f8f9fa';
                });
            });
        });


                // 简单的交互效果：页面加载动画和表格行悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.hilgo-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.hilgo-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
        });

          // 简单的交互效果：页面加载动画和表格行悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.asd-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.asd-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 注释框悬停效果
            const noteBox = document.querySelector('.asd-note');
            noteBox.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e3f2fd';
                this.style.transition = 'background-color 0.3s ease';
            });
            
            noteBox.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#f8f9fa';
            });
        });


          // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.a1sd-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 周标题悬停效果
            const weekTitles = document.querySelectorAll('.a1sd-week-title');
            weekTitles.forEach(title => {
                title.addEventListener('mouseenter', function() {
                    this.style.color = '#3498db';
                    this.style.transition = 'color 0.3s ease';
                });
                
                title.addEventListener('mouseleave', function() {
                    this.style.color = '#2c3e50';
                });
            });
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.a1sd-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
        });

         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.ajusd-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 周标题悬停效果
            const weekTitles = document.querySelectorAll('.ajusd-week-title');
            weekTitles.forEach(title => {
                title.addEventListener('mouseenter', function() {
                    this.style.color = '#3498db';
                    this.style.transition = 'color 0.3s ease';
                });
                
                title.addEventListener('mouseleave', function() {
                    this.style.color = '#2c3e50';
                });
            });
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.ajusd-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
        });


         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.agsd-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 任务列表项悬停效果
            const taskItems = document.querySelectorAll('.agsd-task-list li');
            taskItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f8f9fa';
                    this.style.padding = '5px 10px';
                    this.style.borderRadius = '4px';
                    this.style.transition = 'all 0.3s ease';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '';
                    this.style.padding = '';
                    this.style.borderRadius = '';
                });
            });
            
            // 论文类别悬停效果
            const paperCategory = document.querySelector('.agsd-paper-category');
            paperCategory.addEventListener('mouseenter', function() {
                this.style.color = '#3498db';
                this.style.transition = 'color 0.3s ease';
            });
            
            paperCategory.addEventListener('mouseleave', function() {
                this.style.color = '#2c3e50';
            });
        });

          // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.fd-container');
            container.style.opacity = '0';
            container.style.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.fd-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.fd-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });

                // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.fnd-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.fnd-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.fnd-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以可以展示该论文的详细信息。`);
                });
            });
        });


        // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.fndk-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.fndk-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.fndk-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });


         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.humg-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.humg-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.humg-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });

         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vg-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vg-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.vg-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });

          // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vgm-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vgm-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.vgm-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });


        // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vbgm-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vbgm-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.vbgm-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });


          // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vgbgm-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vgbgm-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.vgbgm-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 论文，这里可以展示该论文的详细信息。`);
                });
            });
        });

         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vgdbg-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vgdbg-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文链接点击效果
            const paperLinks = document.querySelectorAll('.vgdbg-paper-link a');
            paperLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') {
                        e.preventDefault();
                        alert(`该论文链接尚未添加，敬请期待！`);
                    }
                });
            });
        });

         // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vdfbg-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vdfbg-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文链接点击效果
            const paperLinks = document.querySelectorAll('.vdfbg-paper-link a');
            paperLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') {
                        e.preventDefault();
                        alert(`该论文链接尚未添加，敬请期待！`);
                    }
                });
            });
        });


          // 简单的交互效果：页面加载动画和元素悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vhg-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果
            const tableRows = document.querySelectorAll('.vhg-table tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#d1ecf1';
                    this.style.transition = 'background-color 0.3s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    // 检查是否是偶数行，恢复对应的背景色
                    if (Array.from(tableRows).indexOf(this) % 2 === 0) {
                        this.style.backgroundColor = '#f8f9fa';
                    } else {
                        this.style.backgroundColor = '';
                    }
                });
            });
            
            // 论文名称点击效果
            const paperNames = document.querySelectorAll('.vhg-paper-name');
            paperNames.forEach(name => {
                name.addEventListener('click', function() {
                    alert(`您点击了 ${this.textContent} 模型，这里可以展示该模型的详细信息。`);
                });
            });
        });

          // 简单的交互效果：页面加载动画和表格行悬停效果
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.okn-container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 表格行悬停效果已经通过CSS实现
            
            // 点击状态标签的交互效果
            const statusLabels = document.querySelectorAll('.okn-status');
            statusLabels.forEach(label => {
                label.addEventListener('click', function() {
                    const statusText = this.textContent;
                    const taskName = this.closest('tr').querySelector('.okn-task-type')?.textContent || '此任务';
                    alert(`您点击了"${statusText}"状态标签，${taskName}的状态可以在这里更新。`);
                });
            });
            
            // 点击负责人的交互效果
            const owners = document.querySelectorAll('.okn-owner');
            owners.forEach(owner => {
                owner.addEventListener('click', function() {
                    const ownerName = this.textContent;
                    alert(`您点击了负责人"${ownerName}"，可以查看该负责人的详细信息和任务分配情况。`);
                });
            });
        });

         // 简单的交互效果：页面加载动画和目录展开/折叠功能
        document.addEventListener('DOMContentLoaded', function() {
            // 页面加载动画
            const container = document.querySelector('.vwbg-file-tree');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 300);
            
            // 目录展开/折叠功能
            const toggles = document.querySelectorAll('.vwbg-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    // 切换折叠状态
                    this.classList.toggle('collapsed');
                    
                    // 获取下一个兄弟元素（连接线容器）
                    const connector = this.parentElement.nextElementSibling;
                    
                    // 切换显示/隐藏
                    if (connector && connector.classList.contains('vwbg-connector')) {
                        connector.classList.toggle('vwbg-hidden');
                    }
                });
            });
            
            // 点击目录项也可以展开/折叠
            const dirItems = document.querySelectorAll('.vwbg-dir-item');
            dirItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    // 如果点击的是切换按钮，不需要再次触发
                    if (!e.target.classList.contains('vwbg-toggle')) {
                        const toggle = this.querySelector('.vwbg-toggle');
                        if (toggle) {
                            toggle.click();
                        }
                    }
                });
            });
            
            // 点击文件项的交互效果
            const fileItems = document.querySelectorAll('.vwbg-file-item');
            fileItems.forEach(item => {
                item.addEventListener('click', function() {
                    const fileName = this.querySelector('span:last-child').textContent;
                    alert(`您点击了文件: ${fileName}\n\n在实际应用中，这里可以打开文件或显示文件详情。`);
                });
            });
            
            // 默认展开所有目录
            // 这里我们不调用toggle.click()，因为我们希望默认是展开状态
        });